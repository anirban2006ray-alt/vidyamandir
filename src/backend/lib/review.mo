import Map "mo:core/Map";
import Set "mo:core/Set";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Common "../types/common";
import ReviewTypes "../types/review";

module {
  // ── HTML sanitization ────────────────────────────────────────────────────

  /// Strip dangerous HTML tags and their content: <script>, <iframe>, <object>, <embed>.
  /// Also strips all remaining HTML tags, leaving plain text.
  func sanitizeHtml(input : Text) : Text {
    // We perform a simple state-machine pass over the characters.
    // States: #text (normal), #inTag (inside any HTML tag)
    // For dangerous tags we discard all content up to and including </tag>.
    var result : Text = "";
    let chars = input.toArray();
    let len = chars.size();
    var i = 0;

    while (i < len) {
      if (chars[i] == '<') {
        // peek at tag name
        var j = i + 1;
        // skip optional '/'
        if (j < len and chars[j] == '/') { j += 1 };
        // collect tag name chars (alpha only)
        var tagName : Text = "";
        while (j < len and chars[j] != '>' and chars[j] != ' ' and chars[j] != '\n') {
          let c = chars[j];
          if ((c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z')) {
            tagName #= Text.fromChar(c);
          };
          j += 1;
        };
        let lowerTag = tagName.toLower();
        let isDangerous = lowerTag == "script" or lowerTag == "iframe" or
                          lowerTag == "object" or lowerTag == "embed";
        if (isDangerous) {
          // skip everything until we find </tagName>
          let closeTag = "</" # lowerTag;
          var found = false;
          var k = i + 1;
          while (k < len and not found) {
            if (chars[k] == '<') {
              // check if this is the closing tag
              var m = k;
              var candidate : Text = "";
              while (m < len and candidate.size() < closeTag.size()) {
                candidate #= Text.fromChar(chars[m]);
                m += 1;
              };
              if (candidate.toLower() == closeTag) {
                // advance past the full closing tag including '>'
                while (m < len and chars[m] != '>') { m += 1 };
                i := m + 1;
                found := true;
              } else {
                k += 1;
              };
            } else {
              k += 1;
            };
          };
          if (not found) {
            // No closing tag found — skip to end
            i := len;
          };
        } else {
          // safe tag — just skip the whole tag (strip it, keep text content)
          while (i < len and chars[i] != '>') { i += 1 };
          i += 1; // skip '>'
        };
      } else {
        result #= Text.fromChar(chars[i]);
        i += 1;
      };
    };
    result;
  };

  /// Trim leading/trailing whitespace.
  func trimText(t : Text) : Text {
    let chars = t.toArray();
    var start = 0;
    var end = chars.size();
    while (start < end and (chars[start] == ' ' or chars[start] == '\n' or chars[start] == '\t' or chars[start] == '\r')) {
      start += 1;
    };
    while (end > start and (chars[end - 1] == ' ' or chars[end - 1] == '\n' or chars[end - 1] == '\t' or chars[end - 1] == '\r')) {
      end -= 1;
    };
    Text.fromArray(chars.sliceToArray(start, end));
  };

  // ── Shared-type converters ───────────────────────────────────────────────

  public func reviewToPublic(r : ReviewTypes.ReviewInternal) : ReviewTypes.Review {
    {
      id = r.id;
      productId = r.productId;
      userId = r.userId;
      rating = r.rating;
      titleEn = r.titleEn;
      bodyEn = r.bodyEn;
      isVerifiedPurchase = r.isVerifiedPurchase;
      helpfulVotes = r.helpfulVotes;
      createdAt = r.createdAt;
    };
  };

  public func reviewToAdminView(r : ReviewTypes.ReviewInternal) : ReviewTypes.AdminReviewView {
    {
      id = r.id;
      productId = r.productId;
      userId = r.userId;
      rating = r.rating;
      titleEn = r.titleEn;
      bodyEn = r.bodyEn;
      isVerifiedPurchase = r.isVerifiedPurchase;
      helpfulVotes = r.helpfulVotes;
      isApproved = r.isApproved;
      createdAt = r.createdAt;
    };
  };

  public func answerToPublic(a : ReviewTypes.AnswerInternal) : ReviewTypes.Answer {
    {
      id = a.id;
      questionId = a.questionId;
      answeredBy = a.answeredBy;
      answerText = a.answerText;
      helpfulVotes = a.helpfulVotes;
      createdAt = a.createdAt;
    };
  };

  // ── Reviews ──────────────────────────────────────────────────────────────

  public func listReviews(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    productId : Common.ProductId,
  ) : [ReviewTypes.Review] {
    reviews.entries()
      .filter(func((_, r)) { r.productId == productId })
      .map<(Common.ReviewId, ReviewTypes.ReviewInternal), ReviewTypes.Review>(func((_, r)) { reviewToPublic(r) })
      .toArray();
  };

  public func listReviewsSorted(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    productId : Common.ProductId,
    sortMode : { #helpfulness; #recency; #rating },
  ) : [ReviewTypes.Review] {
    let filtered = listReviews(reviews, productId);
    switch sortMode {
      case (#helpfulness) {
        filtered.sort<ReviewTypes.Review>(func(a, b) { Nat.compare(b.helpfulVotes, a.helpfulVotes) });
      };
      case (#recency) {
        filtered.sort<ReviewTypes.Review>(func(a, b) { Int.compare(b.createdAt, a.createdAt) });
      };
      case (#rating) {
        filtered.sort<ReviewTypes.Review>(func(a, b) { Nat.compare(b.rating, a.rating) });
      };
    };
  };

  public func getReview(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    id : Common.ReviewId,
  ) : ?ReviewTypes.Review {
    switch (reviews.get(id)) {
      case (?r) ?reviewToPublic(r);
      case null null;
    };
  };

  /// Creates a new review.
  /// Returns #ok(ReviewId) or a structured AppError.
  /// Enforces: rating 1-5, text lengths, HTML sanitization, no duplicate review per user per product.
  public func createReview(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    purchasedProductsByUser : Map.Map<Common.UserId, Set.Set<Common.ProductId>>,
    nextId : Nat,
    userId : Common.UserId,
    input : ReviewTypes.CreateReviewInput,
  ) : { #ok : Common.ReviewId; #err : Common.AppError } {
    // Validate rating
    if (input.rating < 1 or input.rating > 5) {
      return #err(#validationError("Rating must be between 1 and 5"));
    };

    // Sanitize and validate review title
    let cleanTitle = sanitizeHtml(trimText(input.titleEn));
    if (cleanTitle.size() == 0) {
      return #err(#validationError("Review title cannot be empty"));
    };
    if (cleanTitle.size() > 200) {
      return #err(#validationError("Review title must not exceed 200 characters"));
    };

    // Sanitize and validate review body (10–2000 chars)
    let cleanBody = sanitizeHtml(trimText(input.bodyEn));
    let bodyLen = cleanBody.size();
    if (bodyLen < 10) {
      return #err(#validationError("Review body must be at least 10 characters"));
    };
    if (bodyLen > 2000) {
      return #err(#validationError("Review body must not exceed 2000 characters"));
    };

    // Prevent duplicate review from same user for same product
    let hasDuplicate = switch (reviews.entries().find(func((_, r)) {
      Principal.equal(r.userId, userId) and r.productId == input.productId
    })) {
      case null { false };
      case (?_) { true };
    };
    if (hasDuplicate) {
      return #err(#alreadyReviewed);
    };

    let isVerified = switch (purchasedProductsByUser.get(userId)) {
      case null { false };
      case (?purchased) { purchased.contains(input.productId) };
    };

    let review : ReviewTypes.ReviewInternal = {
      id = nextId;
      productId = input.productId;
      userId;
      rating = input.rating;
      titleEn = cleanTitle;
      bodyEn = cleanBody;
      isVerifiedPurchase = isVerified;
      helpfulVotes = 0;
      helpfulVoters = Set.empty<Common.UserId>();
      isApproved = true;
      createdAt = Time.now();
    };
    reviews.add(nextId, review);
    #ok(nextId);
  };

  /// Votes a review as helpful.
  /// Returns #ok(true) if voted, #err(#alreadyVoted) if duplicate, #err(#notFound) if missing.
  public func voteReviewHelpful(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    reviewId : Common.ReviewId,
    voterId : Common.UserId,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (reviews.get(reviewId)) {
      case null { #err(#notFound) };
      case (?r) {
        if (r.helpfulVoters.contains(voterId)) {
          return #err(#alreadyVoted);
        };
        let newVoters = r.helpfulVoters.clone();
        newVoters.add(voterId);
        reviews.add(reviewId, { r with helpfulVotes = r.helpfulVotes + 1; helpfulVoters = newVoters });
        #ok(true);
      };
    };
  };

  // ── Q&A ──────────────────────────────────────────────────────────────────

  public func listQuestions(
    questions : Map.Map<Common.QuestionId, ReviewTypes.Question>,
    productId : Common.ProductId,
  ) : [ReviewTypes.Question] {
    questions.entries()
      .filter(func((_, q)) { q.productId == productId })
      .map<(Common.QuestionId, ReviewTypes.Question), ReviewTypes.Question>(func((_, q)) { q })
      .toArray();
  };

  /// Asks a question. Returns #ok(QuestionId) or structured error.
  /// Validates text length: min 10, max 500 chars.
  public func askQuestion(
    questions : Map.Map<Common.QuestionId, ReviewTypes.Question>,
    nextId : Nat,
    productId : Common.ProductId,
    userId : Common.UserId,
    questionText : Text,
  ) : { #ok : Common.QuestionId; #err : Common.AppError } {
    let len = questionText.size();
    if (len < 10) {
      return #err(#validationError("Question must be at least 10 characters"));
    };
    if (len > 500) {
      return #err(#validationError("Question must not exceed 500 characters"));
    };
    let question : ReviewTypes.Question = {
      id = nextId;
      productId;
      askedBy = userId;
      questionText;
      createdAt = Time.now();
    };
    questions.add(nextId, question);
    #ok(nextId);
  };

  public func listAnswers(
    answers : Map.Map<Common.AnswerId, ReviewTypes.AnswerInternal>,
    questionId : Common.QuestionId,
  ) : [ReviewTypes.Answer] {
    answers.entries()
      .filter(func((_, a)) { a.questionId == questionId })
      .map<(Common.AnswerId, ReviewTypes.AnswerInternal), ReviewTypes.Answer>(func((_, a)) { answerToPublic(a) })
      .toArray();
  };

  /// Posts an answer. Returns #ok(AnswerId) or structured error.
  /// Validates text length: min 5, max 250 chars.
  public func postAnswer(
    answers : Map.Map<Common.AnswerId, ReviewTypes.AnswerInternal>,
    questions : Map.Map<Common.QuestionId, ReviewTypes.Question>,
    nextId : Nat,
    questionId : Common.QuestionId,
    userId : Common.UserId,
    answerText : Text,
  ) : { #ok : Common.AnswerId; #err : Common.AppError } {
    // Verify question exists
    if (questions.get(questionId) == null) {
      return #err(#notFound);
    };
    let len = answerText.size();
    if (len < 5) {
      return #err(#validationError("Answer must be at least 5 characters"));
    };
    if (len > 250) {
      return #err(#validationError("Answer must not exceed 250 characters"));
    };
    let answer : ReviewTypes.AnswerInternal = {
      id = nextId;
      questionId;
      answeredBy = userId;
      answerText;
      helpfulVotes = 0;
      helpfulVoters = Set.empty<Common.UserId>();
      createdAt = Time.now();
    };
    answers.add(nextId, answer);
    #ok(nextId);
  };

  /// Votes an answer as helpful.
  /// Returns #ok(true), #err(#alreadyVoted), or #err(#notFound).
  public func voteAnswerHelpful(
    answers : Map.Map<Common.AnswerId, ReviewTypes.AnswerInternal>,
    answerId : Common.AnswerId,
    voterId : Common.UserId,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (answers.get(answerId)) {
      case null { #err(#notFound) };
      case (?a) {
        if (a.helpfulVoters.contains(voterId)) {
          return #err(#alreadyVoted);
        };
        let newVoters = a.helpfulVoters.clone();
        newVoters.add(voterId);
        answers.add(answerId, { a with helpfulVotes = a.helpfulVotes + 1; helpfulVoters = newVoters });
        #ok(true);
      };
    };
  };

  // ── User self-service ─────────────────────────────────────────────────────

  /// List all reviews submitted by a specific user.
  public func listReviewsByUser(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    userId : Common.UserId,
  ) : [ReviewTypes.Review] {
    reviews.entries()
      .filter(func((_, r)) { Principal.equal(r.userId, userId) })
      .map<(Common.ReviewId, ReviewTypes.ReviewInternal), ReviewTypes.Review>(func((_, r)) { reviewToPublic(r) })
      .toArray();
  };

  /// Delete a review authored by the calling user.
  /// Returns #ok(true) on success, #err(#notFound) if not found, #err(#unauthorized) if not owner.
  public func deleteOwnReview(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    reviewId : Common.ReviewId,
    callerId : Common.UserId,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (reviews.get(reviewId)) {
      case null { #err(#notFound) };
      case (?r) {
        if (not Principal.equal(r.userId, callerId)) {
          return #err(#unauthorized);
        };
        reviews.remove(reviewId);
        #ok(true);
      };
    };
  };

  // ── Admin review management ───────────────────────────────────────────────

  /// List all reviews across all products, sorted by date descending.
  public func listAllReviews(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
  ) : [ReviewTypes.AdminReviewView] {
    let all = reviews.entries()
      .map(func((_, r)) { reviewToAdminView(r) })
      .toArray();
    all.sort<ReviewTypes.AdminReviewView>(func(a, b) { Int.compare(b.createdAt, a.createdAt) });
  };

  /// Delete a review by ID. Returns true if deleted, false if not found.
  public func adminDeleteReview(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    reviewId : Common.ReviewId,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (reviews.get(reviewId)) {
      case null { #err(#notFound) };
      case (?_) {
        reviews.remove(reviewId);
        #ok(true);
      };
    };
  };

  /// Toggle the isApproved flag on a review. Returns the new approved state.
  public func adminApproveReview(
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>,
    reviewId : Common.ReviewId,
    approved : Bool,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (reviews.get(reviewId)) {
      case null { #err(#notFound) };
      case (?r) {
        reviews.add(reviewId, { r with isApproved = approved });
        #ok(approved);
      };
    };
  };
};
