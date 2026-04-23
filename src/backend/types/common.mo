module {
  public type Timestamp = Int; // nanoseconds since epoch (Time.now())
  public type UserId = Principal;
  public type ProductId = Nat;
  public type OrderId = Nat;
  public type ReviewId = Nat;
  public type AddressId = Nat;
  public type QuestionId = Nat;
  public type AnswerId = Nat;
  public type PromoCodeId = Nat;
  public type FlashSaleId = Nat;

  /// Structured error variants returned across all API endpoints.
  public type AppError = {
    #notFound;
    #unauthorized;
    #invalidInput : Text;
    #validationError : Text;
    #insufficientStock;
    #alreadyExists;
    #duplicateEntry;
    #expired;
    #minSpend : Nat; // minimum spend in paisa required
    #limitExceeded;
    #rateLimitExceeded;
    #alreadyReviewed;
    #alreadyVoted;
    #serverError : Text;
  };

  /// Rate-limit window entry stored per caller+action key.
  public type RateLimitEntry = {
    count : Nat;
    windowStart : Int;
  };

  /// Idempotency key record with creation timestamp for expiry pruning.
  public type IdempotencyEntry = {
    orderId : OrderId;
    createdAt : Int;
  };
};
