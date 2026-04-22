import Map "mo:core/Map";
import Set "mo:core/Set";
import List "mo:core/List";
import ReviewTypes "types/review";
import Common "types/common";

/// Migration: add `isApproved` field to every ReviewInternal record.
/// All existing reviews default to approved = true so they remain visible.
module {
  // ── Old types (inline copy from .old/src/backend/types/review.mo) ────────

  type OldReviewInternal = {
    id : Common.ReviewId;
    productId : Common.ProductId;
    userId : Common.UserId;
    rating : Nat;
    titleEn : Text;
    bodyEn : Text;
    isVerifiedPurchase : Bool;
    helpfulVotes : Nat;
    helpfulVoters : Set.Set<Common.UserId>;
    createdAt : Common.Timestamp;
  };

  // ── Actor state records ───────────────────────────────────────────────────

  type OldActor = {
    reviews : Map.Map<Common.ReviewId, OldReviewInternal>;
  };

  type NewActor = {
    reviews : Map.Map<Common.ReviewId, ReviewTypes.ReviewInternal>;
  };

  // ── Migration function ────────────────────────────────────────────────────

  public func run(old : OldActor) : NewActor {
    let reviews = old.reviews.map<Common.ReviewId, OldReviewInternal, ReviewTypes.ReviewInternal>(
      func(_id, r) {
        { r with isApproved = true };
      }
    );
    { reviews };
  };
};
