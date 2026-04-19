import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import UserTypes "../types/user";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";
import UserLib "../lib/user";

mixin (
  accessControlState : AccessControl.AccessControlState,
  profiles : Map.Map<Common.UserId, UserTypes.UserProfile>,
  orders : Map.Map<Common.OrderId, OrderTypes.Order>,
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
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

  // Admin analytics
  public query ({ caller }) func getAdminAnalytics() : async UserTypes.AdminAnalytics {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: only admins can access analytics");
    };
    UserLib.getAdminAnalytics(orders, products, profiles, Time.now());
  };
};
