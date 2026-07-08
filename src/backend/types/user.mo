import Common "common";

module {
  /// Per-principal login rate-limit entry: tracks attempt count and window start.
  /// Window = 60 seconds (60_000_000_000 nanoseconds). Max 5 attempts per window.
  public type LoginRateLimitEntry = {
    count : Nat;
    windowStart : Int; // nanoseconds (Time.now())
  };

  /// Returned by getCallerLoginStatus — lets the frontend show lockout countdown.
  public type CallerLoginStatus = {
    isLoggedIn : Bool;              // true when caller has a non-anonymous principal
    lastLoginAt : ?Int;             // nanosecond timestamp of last successful login, or null
    loginAttempts : Nat;            // attempts in the current 60-second window (0 if window expired)
    isRateLimited : Bool;           // true when loginAttempts >= 5 and window is still active
    rateLimitResetAt : ?Int;        // nanosecond timestamp when current window expires; null if not rate-limited
    loginAttemptWindowSeconds : Nat; // always 60 — tells frontend the window length without hardcoding
  };

  /// OTP entry — stores a one-time passcode with TTL, attempt counter, and used flag.
  /// TTL = 10 minutes (600_000_000_000 nanoseconds). Max 3 verification attempts.
  public type OtpEntry = {
    code : Text;      // 6-digit string, zero-padded
    createdAt : Int;  // nanoseconds (Time.now())
    expiresAt : Int;  // createdAt + 600_000_000_000
    attempts : Nat;   // incremented on each failed verifyOtp call
    used : Bool;      // true after a successful verification
  };

  /// Result of generateOtp.
  public type OtpResult = { #ok : { code : Text }; #err : Text };

  /// Result of verifyOtp.
  public type OtpVerifyResult = {
    #ok;                                       // verified successfully
    #err : { #invalidOtp : Nat; #expired; #tooManyAttempts }; // attemptsRemaining for #invalidOtp
  };

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
