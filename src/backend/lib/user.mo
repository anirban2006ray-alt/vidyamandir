import Map "mo:core/Map";
import List "mo:core/List";
import Common "../types/common";
import UserTypes "../types/user";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";

module {
  // ── Max analytics event ring-buffer capacity ───────────────────────────────
  let MAX_EVENTS : Nat = 10_000;

  // ── 5-minute cache TTL: 300,000,000,000 nanoseconds ───────────────────────
  // Computed as: 5 * 60 * 1_000_000_000 = 300_000_000_000
  let CACHE_TTL_NS : Int = 300_000_000_000;

  public func isCacheFresh(entry : UserTypes.AnalyticsCacheEntry, now : Common.Timestamp) : Bool {
    now - entry.cachedAt < CACHE_TTL_NS;
  };

  public func getProfile(
    profiles : Map.Map<Common.UserId, UserTypes.UserProfile>,
    userId : Common.UserId,
  ) : ?UserTypes.UserProfile {
    profiles.get(userId);
  };

  public func saveProfile(
    profiles : Map.Map<Common.UserId, UserTypes.UserProfile>,
    userId : Common.UserId,
    profile : UserTypes.UserProfile,
  ) {
    profiles.add(userId, profile);
  };

  public func getAdminAnalytics(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    profiles : Map.Map<Common.UserId, UserTypes.UserProfile>,
    now : Common.Timestamp,
  ) : UserTypes.AdminAnalytics {
    let thirtyDaysNs : Int = 30 * 24 * 60 * 60 * 1_000_000_000;
    let cutoff : Int = now - thirtyDaysNs;

    // Accumulate all-time and 30-day stats in a single pass
    var totalRevenue : Nat = 0;
    var totalOrderCount : Nat = 0;
    var recentOrderCount : Nat = 0;
    var recentRevenue : Nat = 0;

    // Map productId -> total quantity sold (for bestsellers)
    let soldCounts = Map.empty<Common.ProductId, Nat>();

    for ((_, order) in orders.entries()) {
      totalOrderCount += 1;
      totalRevenue += order.totalInPaisa;
      if (order.createdAt >= cutoff) {
        recentOrderCount += 1;
        recentRevenue += order.totalInPaisa;
      };
      for (item in order.items.values()) {
        let prev = switch (soldCounts.get(item.productId)) {
          case (?n) n;
          case null 0;
        };
        soldCounts.add(item.productId, prev + item.quantity);
      };
    };

    // Build bestsellers: collect all (productId, count) pairs, sort descending, take top 10
    let allSold = soldCounts.toArray();
    let sorted = allSold.sort(func((_, a : Nat), (_, b : Nat)) {
      if (a > b) #less      // descending: larger count first
      else if (a < b) #greater
      else #equal
    });
    let top10 = if (sorted.size() <= 10) sorted
                else sorted.sliceToArray(0, 10);

    {
      totalOrders = totalOrderCount;
      totalRevenueInPaisa = totalRevenue;
      totalProducts = products.size();
      totalUsers = profiles.size();
      bestsellers = top10;
      recentOrderCount = recentOrderCount;
      recentRevenueInPaisa = recentRevenue;
    };
  };

  // ── Analytics event ring buffer ────────────────────────────────────────────

  /// Append an analytics event to the ring buffer (capped at MAX_EVENTS).
  /// When the buffer is full, the oldest entries are removed from the front.
  public func recordEvent(
    eventBuf : List.List<UserTypes.AnalyticsEvent>,
    event : UserTypes.AnalyticsEvent,
  ) {
    eventBuf.add(event);
    // Trim to MAX_EVENTS by dropping the oldest from the front
    if (eventBuf.size() > MAX_EVENTS) {
      let excess = eventBuf.size() - MAX_EVENTS;
      let all = eventBuf.toArray();
      eventBuf.clear();
      let trimmed = all.sliceToArray(excess, all.size());
      for (e in trimmed.values()) { eventBuf.add(e) };
    };
  };

  /// Return a paginated slice of analytics events (most-recent first).
  /// limit is capped at 500.
  public func getAnalyticsEvents(
    eventBuf : List.List<UserTypes.AnalyticsEvent>,
    offset : Nat,
    limit : Nat,
  ) : [UserTypes.AnalyticsEvent] {
    let cappedLimit = if (limit > 500) 500 else limit;
    let total = eventBuf.size();
    if (offset >= total) return [];
    // Return in reverse (most-recent first)
    let reversed = eventBuf.reverse();
    let end = if (offset + cappedLimit > total) total else offset + cappedLimit;
    reversed.sliceToArray(offset, end);
  };

  /// Return top-N bestsellers from a pre-sorted bestsellers array (from cached analytics).
  /// Falls back to a live scan when no cache is available.
  public func getTopProducts(
    bestsellers : [(Common.ProductId, Nat)],
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    limit : Nat,
  ) : [CatalogTypes.Product] {
    let cappedLimit = if (limit > 50) 50 else limit;
    let take = if (bestsellers.size() < cappedLimit) bestsellers.size() else cappedLimit;
    let result = List.empty<CatalogTypes.Product>();
    var i = 0;
    while (i < take) {
      let (pid, _) = bestsellers[i];
      switch (products.get(pid)) {
        case (?p) result.add(p);
        case null {};
      };
      i += 1;
    };
    result.toArray();
  };
};
