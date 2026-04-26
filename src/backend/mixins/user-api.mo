import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import UserTypes "../types/user";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";
import UserLib "../lib/user";
import CatalogLib "../lib/catalog";

mixin (
  accessControlState : AccessControl.AccessControlState,
  profiles : Map.Map<Common.UserId, UserTypes.UserProfile>,
  orders : Map.Map<Common.OrderId, OrderTypes.Order>,
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
  analyticsCache : [var ?UserTypes.AnalyticsCacheEntry],
  analyticsEvents : List.List<UserTypes.AnalyticsEvent>,
  loginRateLimits : Map.Map<Text, UserTypes.LoginRateLimitEntry>,
  lastLoginMap : Map.Map<Common.UserId, Int>,
  rateLimitMap : Map.Map<Text, Common.RateLimitEntry>,
  orderIdempotencyKeys : Map.Map<Text, Common.IdempotencyEntry>,
) {
  public query ({ caller }) func getCallerUserProfile() : async ?UserTypes.UserProfile {
    UserLib.getProfile(profiles, caller);
  };

  /// Saves the caller's user profile with basic input validation.
  public shared ({ caller }) func saveCallerUserProfile(profile : UserTypes.UserProfile) : async { #ok; #err : Common.AppError } {
    if (caller.isAnonymous()) {
      return #err(#unauthorized);
    };
    if (profile.name.size() == 0) {
      return #err(#invalidInput("Name is required"));
    };
    // Basic email format check: must contain '@' and '.'
    if (not profile.email.contains(#char '@') or not profile.email.contains(#char '.')) {
      return #err(#invalidInput("Invalid email format"));
    };
    if (profile.phone.size() > 0 and profile.phone.size() < 7) {
      return #err(#invalidInput("Phone number is too short"));
    };
    UserLib.saveProfile(profiles, caller, profile);
    #ok;
  };

  public query ({ caller }) func getUserProfile(user : Common.UserId) : async ?UserTypes.UserProfile {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: only admins can view other user profiles");
    };
    UserLib.getProfile(profiles, user);
  };

  // ── Admin analytics with 5-minute cache ──────────────────────────────────
  // Note: shared (update) call required to write the cache — query functions cannot mutate state.
  public shared ({ caller }) func getAdminAnalytics() : async UserTypes.AdminAnalytics {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: only admins can access analytics");
    };
    let now = Time.now();
    switch (analyticsCache[0]) {
      case (?entry) {
        if (UserLib.isCacheFresh(entry, now)) {
          return entry.data;
        };
      };
      case null {};
    };
    // Cache is stale or absent — recompute and store
    let fresh = UserLib.getAdminAnalytics(orders, products, profiles, now);
    analyticsCache[0] := ?{ data = fresh; cachedAt = now };
    fresh;
  };

  // ── Analytics events (admin) ──────────────────────────────────────────────

  /// Return recent analytics events, paginated. limit capped at 500.
  public query ({ caller }) func getAnalyticsEvents(offset : Nat, limit : Nat) : async [UserTypes.AnalyticsEvent] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: only admins can access analytics events");
    };
    UserLib.getAnalyticsEvents(analyticsEvents, offset, limit);
  };

  // ── Top products (from cache) ─────────────────────────────────────────────

  /// Return top bestselling products by order quantity.
  /// Uses cached bestsellers list — O(limit) instead of O(N orders).
  public query ({ caller }) func getTopProducts(limit : Nat) : async [CatalogTypes.ProductView] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: only admins can access top products");
    };
    let bestsellers : [(Common.ProductId, Nat)] = switch (analyticsCache[0]) {
      case (?entry) entry.data.bestsellers;
      case null [];
    };
    let rawProducts = UserLib.getTopProducts(bestsellers, products, limit);
    rawProducts.map<CatalogTypes.Product, CatalogTypes.ProductView>(CatalogLib.toView);
  };

  // ── Login status query ────────────────────────────────────────────────────

  /// Returns login state for the caller: isLoggedIn, lastLoginAt, current rate-limit window.
  /// O(1) — pure map lookups. Safe to call on every page load.
  public query ({ caller }) func getCallerLoginStatus() : async UserTypes.CallerLoginStatus {
    let now = Time.now();
    UserLib.buildCallerLoginStatus(loginRateLimits, lastLoginMap, caller, now);
  };

  // ── Stale-entry pruning (admin) ────────────────────────────────────────────

  /// Prune all stale rate-limit entries and expired idempotency keys.
  /// Prevents unbounded HashMap growth at 10M+ users.
  /// Admin-only. Returns counts of pruned entries per category.
  public shared ({ caller }) func pruneStaleRateLimits() : async {
    loginRateLimitsPruned : Nat;
    enquiryRateLimitsPruned : Nat;
    idempotencyKeysPruned : Nat;
  } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: only admins can prune stale entries");
    };
    let now = Time.now();
    let l = UserLib.pruneLoginRateLimits(loginRateLimits, now);
    let e = UserLib.pruneEnquiryRateLimits(rateLimitMap, now);
    let i = UserLib.pruneIdempotencyKeys(orderIdempotencyKeys, now);
    { loginRateLimitsPruned = l; enquiryRateLimitsPruned = e; idempotencyKeysPruned = i };
  };
};
