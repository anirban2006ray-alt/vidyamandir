import Map "mo:core/Map";
import Common "../types/common";
import UserTypes "../types/user";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";

module {
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
};
