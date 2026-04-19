import Common "common";

module {
  public type FlashSaleItem = {
    productId : Common.ProductId;
    originalPriceInPaisa : Nat;
    discountedPriceInPaisa : Nat;
    discountPercent : Nat; // 0-100
    quantityLimit : ?Nat; // null = unlimited
    soldCount : Nat;
  };

  public type FlashSale = {
    id : Common.FlashSaleId;
    titleEn : Text;
    titleBn : Text;
    startTime : Common.Timestamp;
    endTime : Common.Timestamp;
    items : [FlashSaleItem];
    isActive : Bool; // admin can force-deactivate
    createdAt : Common.Timestamp;
  };

  public type FlashSaleView = {
    id : Common.FlashSaleId;
    titleEn : Text;
    titleBn : Text;
    startTime : Common.Timestamp;
    endTime : Common.Timestamp;
    items : [FlashSaleItem];
    isCurrentlyActive : Bool; // computed from time + isActive flag
    createdAt : Common.Timestamp;
  };

  public type CreateFlashSaleInput = {
    titleEn : Text;
    titleBn : Text;
    startTime : Common.Timestamp;
    endTime : Common.Timestamp;
    items : [FlashSaleItem];
  };
};
