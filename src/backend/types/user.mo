import Common "common";

module {
  public type UserProfile = {
    name : Text;
    email : Text;
    phone : Text;
    preferredLanguage : { #english; #bengali };
    createdAt : Common.Timestamp;
  };

  public type RecentlyViewedEntry = {
    productId : Common.ProductId;
    viewedAt : Common.Timestamp;
  };

  public type AdminAnalytics = {
    totalOrders : Nat;
    totalRevenueInPaisa : Nat;
    totalProducts : Nat;
    totalUsers : Nat;
    bestsellers : [(Common.ProductId, Nat)]; // (productId, orderCount) top 10
    recentOrderCount : Nat; // last 30 days
    recentRevenueInPaisa : Nat; // last 30 days
  };
};
