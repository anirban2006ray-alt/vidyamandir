import Common "common";

module {
  public type CartItem = {
    productId : Common.ProductId;
    quantity : Nat;
    addedAt : Common.Timestamp;
    // Snapshot price at time of adding (in case price changes)
    priceSnapshotInPaisa : Nat;
  };

  public type Cart = {
    userId : Common.UserId;
    items : [CartItem];
    updatedAt : Common.Timestamp;
  };

  public type WishlistItem = {
    productId : Common.ProductId;
    addedAt : Common.Timestamp;
  };
};
