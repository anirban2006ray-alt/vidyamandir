import Common "common";
import Set "mo:core/Set";

module {
  // ── Public (shared) types ─────────────────────────────────────────────────

  public type Review = {
    id : Common.ReviewId;
    productId : Common.ProductId;
    userId : Common.UserId;
    rating : Nat; // 1-5
    titleEn : Text;
    bodyEn : Text;
    isVerifiedPurchase : Bool;
    helpfulVotes : Nat;
    createdAt : Common.Timestamp;
  };

  public type CreateReviewInput = {
    productId : Common.ProductId;
    rating : Nat;
    titleEn : Text;
    bodyEn : Text;
  };

  public type Question = {
    id : Common.QuestionId;
    productId : Common.ProductId;
    askedBy : Common.UserId;
    questionText : Text;
    createdAt : Common.Timestamp;
  };

  public type Answer = {
    id : Common.AnswerId;
    questionId : Common.QuestionId;
    answeredBy : Common.UserId;
    answerText : Text;
    helpfulVotes : Nat;
    createdAt : Common.Timestamp;
  };

  // ── Internal types (not shared over the wire) ─────────────────────────────

  /// Review with voter set for dedup-safe helpful-vote tracking.
  public type ReviewInternal = {
    id : Common.ReviewId;
    productId : Common.ProductId;
    userId : Common.UserId;
    rating : Nat;
    titleEn : Text;
    bodyEn : Text;
    isVerifiedPurchase : Bool;
    helpfulVotes : Nat;
    helpfulVoters : Set.Set<Common.UserId>; // principals who have voted
    createdAt : Common.Timestamp;
  };

  /// Answer with voter set for dedup-safe helpful-vote tracking.
  public type AnswerInternal = {
    id : Common.AnswerId;
    questionId : Common.QuestionId;
    answeredBy : Common.UserId;
    answerText : Text;
    helpfulVotes : Nat;
    helpfulVoters : Set.Set<Common.UserId>;
    createdAt : Common.Timestamp;
  };
};
