import Map "mo:core/Map";
import Set "mo:core/Set";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Common "../types/common";
import ReviewTypes "../types/review";
import CatalogTypes "../types/catalog";
import UserTypes "../types/user";
import ReviewLib "../lib/review";
import UserLib "../lib/user";
import Notifications "../lib/notifications";

mixin (
  accessControlState : AccessControl.AccessControlState,
  reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
  questions : Map.Map<Common.QuestionId, ReviewTypes.Question>,
  answers : Map.Map<Common.AnswerId, ReviewTypes.AnswerInternal>,
  purchasedProductsByUser : Map.Map<Common.UserId, Set.Set<Common.ProductId>>,
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
  nextReviewId : [var Nat],
  nextQuestionId : [var Nat],
  nextAnswerId : [var Nat],
  analyticsCache : [var ?UserTypes.AnalyticsCacheEntry],
  analyticsEvents : List.List<UserTypes.AnalyticsEvent>,
  transform : OutCall.Transform,
  rateLimitMap : Map.Map<Text, Common.RateLimitEntry>,
) {
  // ── Rate limit helper ─────────────────────────────────────────────────────

  func checkRateLimit(key : Text, maxCount : Nat, windowSecs : Int) : Bool {
    let now = Time.now();
    let windowNs : Int = windowSecs * 1_000_000_000;
    switch (rateLimitMap.get(key)) {
      case null {
        rateLimitMap.add(key, { count = 1; windowStart = now });
        true;
      };
      case (?entry) {
        if (now - entry.windowStart > windowNs) {
          rateLimitMap.add(key, { count = 1; windowStart = now });
          true;
        } else if (entry.count < maxCount) {
          rateLimitMap.add(key, { entry with count = entry.count + 1 });
          true;
        } else {
          false;
        };
      };
    };
  };

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

  /// List all reviews submitted by the caller (user self-service).
  public query ({ caller }) func listMyReviews() : async [ReviewTypes.Review] {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    ReviewLib.listReviewsByUser(reviews, caller);
  };

  /// Delete the caller's own review. Returns #ok(true) if deleted.
  public shared ({ caller }) func deleteMyReview(reviewId : Common.ReviewId) : async { #ok : Bool; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    ReviewLib.deleteOwnReview(reviews, reviewId, caller);
  };

  /// Submit a review for a product.
  /// Returns #ok(ReviewId) or a structured AppError.
  /// Rate limited: max 10 per caller per day.
  public shared ({ caller }) func createReview(input : ReviewTypes.CreateReviewInput) : async { #ok : Common.ReviewId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    AccessControl.initialize(accessControlState, caller);
    let rlKey = "review:" # caller.toText();
    if (not checkRateLimit(rlKey, 10, 86400)) {
      return #err(#rateLimitExceeded);
    };
    switch (ReviewLib.createReview(reviews, purchasedProductsByUser, nextReviewId[0], caller, input)) {
      case (#ok(id)) {
        nextReviewId[0] += 1;
        // Track 'review_submitted' analytics event
        UserLib.recordEvent(analyticsEvents, {
          eventType = "review_submitted";
          userId = caller.toText();
          productId = ?input.productId;
          orderId = null;
          amount = null;
          timestamp = Time.now();
        });
        // Fire-and-forget: notify store of new review
        switch (reviews.get(id)) {
          case (?review) {
            let productTitle = switch (products.get(review.productId)) {
              case (?p) { p.info.titleEn };
              case null { "Unknown Book" };
            };
            ignore Notifications.sendReviewNotification(review, productTitle, transform);
          };
          case null {};
        };
        #ok(id);
      };
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

  // ── Admin review management ───────────────────────────────────────────────

  /// List all reviews across all products (admin only), sorted by date.
  public query ({ caller }) func listAllReviews() : async [ReviewTypes.AdminReviewView] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    ReviewLib.listAllReviews(reviews);
  };

  /// Paginated admin reviews list. limit capped at 100.
  public query ({ caller }) func listAllReviewsPaged(offset : Nat, limit : Nat) : async UserTypes.PagedResult<ReviewTypes.AdminReviewView> {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    let cappedLimit = if (limit == 0) 20 else if (limit > 100) 100 else limit;
    let all = ReviewLib.listAllReviews(reviews);
    let total = all.size();
    if (offset >= total) {
      return { items = []; totalCount = total; hasMore = false };
    };
    let end = if (offset + cappedLimit > total) total else offset + cappedLimit;
    {
      items = all.sliceToArray(offset, end);
      totalCount = total;
      hasMore = end < total;
    };
  };

  /// Delete any review by ID (admin only).
  public shared ({ caller }) func adminDeleteReview(reviewId : Common.ReviewId) : async { #ok : Bool; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    ReviewLib.adminDeleteReview(reviews, reviewId);
  };

  /// Set approved/unapproved state on a review (admin only).
  public shared ({ caller }) func adminApproveReview(reviewId : Common.ReviewId, approved : Bool) : async { #ok : Bool; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    ReviewLib.adminApproveReview(reviews, reviewId, approved);
  };
};
