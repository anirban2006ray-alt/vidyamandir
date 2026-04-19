import Map "mo:core/Map";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import ReviewTypes "../types/review";
import ReviewLib "../lib/review";

mixin (
  accessControlState : AccessControl.AccessControlState,
  reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
  questions : Map.Map<Common.QuestionId, ReviewTypes.Question>,
  answers : Map.Map<Common.AnswerId, ReviewTypes.AnswerInternal>,
  purchasedProductsByUser : Map.Map<Common.UserId, Set.Set<Common.ProductId>>,
  nextReviewId : [var Nat],
  nextQuestionId : [var Nat],
  nextAnswerId : [var Nat],
) {
  /// List all reviews for a product (default: by recency).
  public query func listReviews(productId : Common.ProductId) : async [ReviewTypes.Review] {
    ReviewLib.listReviewsSorted(reviews, productId, #recency);
  };

  /// List all reviews for a product sorted by the given mode.
  public query func listReviewsSorted(
    productId : Common.ProductId,
    sortMode : { #helpfulness; #recency; #rating },
  ) : async [ReviewTypes.Review] {
    ReviewLib.listReviewsSorted(reviews, productId, sortMode);
  };

  /// Get a single review by ID.
  public query func getReview(id : Common.ReviewId) : async ?ReviewTypes.Review {
    ReviewLib.getReview(reviews, id);
  };

  /// Submit a review for a product.
  /// Returns #ok(ReviewId) or a structured AppError.
  public shared ({ caller }) func createReview(input : ReviewTypes.CreateReviewInput) : async { #ok : Common.ReviewId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    AccessControl.initialize(accessControlState, caller);
    switch (ReviewLib.createReview(reviews, purchasedProductsByUser, nextReviewId[0], caller, input)) {
      case (#ok(id)) { nextReviewId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  /// Vote a review as helpful. Prevents duplicate votes from the same user.
  public shared ({ caller }) func voteReviewHelpful(reviewId : Common.ReviewId) : async { #ok : Bool; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    AccessControl.initialize(accessControlState, caller);
    ReviewLib.voteReviewHelpful(reviews, reviewId, caller);
  };

  // ── Q&A ──────────────────────────────────────────────────────────────────

  /// List all questions for a product.
  public query func listQuestions(productId : Common.ProductId) : async [ReviewTypes.Question] {
    ReviewLib.listQuestions(questions, productId);
  };

  /// Ask a question about a product.
  /// Returns #ok(QuestionId) or a structured AppError.
  public shared ({ caller }) func askQuestion(productId : Common.ProductId, questionText : Text) : async { #ok : Common.QuestionId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    AccessControl.initialize(accessControlState, caller);
    switch (ReviewLib.askQuestion(questions, nextQuestionId[0], productId, caller, questionText)) {
      case (#ok(id)) { nextQuestionId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  /// List all answers for a question.
  public query func listAnswers(questionId : Common.QuestionId) : async [ReviewTypes.Answer] {
    ReviewLib.listAnswers(answers, questionId);
  };

  /// Post an answer to a question.
  /// Returns #ok(AnswerId) or a structured AppError.
  public shared ({ caller }) func postAnswer(questionId : Common.QuestionId, answerText : Text) : async { #ok : Common.AnswerId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    AccessControl.initialize(accessControlState, caller);
    switch (ReviewLib.postAnswer(answers, questions, nextAnswerId[0], questionId, caller, answerText)) {
      case (#ok(id)) { nextAnswerId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  /// Vote an answer as helpful. Prevents duplicate votes from the same user.
  public shared ({ caller }) func voteAnswerHelpful(answerId : Common.AnswerId) : async { #ok : Bool; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    AccessControl.initialize(accessControlState, caller);
    ReviewLib.voteAnswerHelpful(answers, answerId, caller);
  };
};
