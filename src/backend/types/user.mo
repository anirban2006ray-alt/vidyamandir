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

  /// Analytics event — tracks user actions for incremental analytics.
  public type AnalyticsEvent = {
    eventType : Text; // 'book_purchased' | 'review_submitted' | 'return_requested' | 'return_approved'
    userId : Text;
    productId : ?Common.ProductId;
    orderId : ?Common.OrderId;
    amount : ?Nat; // in paisa
    timestamp : Common.Timestamp;
  };

  /// Cached analytics snapshot with staleness metadata.
  public type AnalyticsCacheEntry = {
    data : AdminAnalytics;
    cachedAt : Common.Timestamp;
  };

  /// Paged result wrapper for list endpoints.
  public type PagedResult<T> = {
    items : [T];
    totalCount : Nat;
    hasMore : Bool;
  };
};
