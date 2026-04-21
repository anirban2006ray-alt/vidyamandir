import Common "common";

module {
  public type OrderStatus = {
    #processing;
    #shipped;
    #delivered;
    #cancelled;
    #refundRequested;
    #refunded;
  };

  public type OrderItem = {
    productId : Common.ProductId;
    quantity : Nat;
    priceInPaisa : Nat; // price at time of order
    titleEn : Text; // snapshot
  };

  public type Address = {
    id : Common.AddressId;
    userId : Common.UserId;
    fullName : Text;
    phone : Text;
    line1 : Text;
    line2 : Text;
    city : Text;
    district : Text;
    state : Text;
    pincode : Text;
    isDefault : Bool;
    createdAt : Common.Timestamp;
  };

  public type AddressInput = {
    fullName : Text;
    phone : Text;
    line1 : Text;
    line2 : Text;
    city : Text;
    district : Text;
    state : Text;
    pincode : Text;
  };

  public type StatusUpdate = {
    status : OrderStatus;
    updatedAt : Common.Timestamp;
    note : Text;
  };

  public type Order = {
    id : Common.OrderId;
    userId : Common.UserId;
    items : [OrderItem];
    shippingAddress : Address;
    totalInPaisa : Nat;
    status : OrderStatus;
    statusHistory : [StatusUpdate];
    stripePaymentIntentId : Text;
    idempotencyKey : Text; // caller principal + timestamp — prevents duplicate submissions
    promoCodeApplied : ?Text;
    discountInPaisa : Nat;
    estimatedDeliveryDate : ?Common.Timestamp;
    courierNote : ?Text;
    createdAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
  };

  public type CreateOrderInput = {
    items : [OrderItem];
    shippingAddressId : Common.AddressId;
    promoCode : ?Text;
    stripePaymentIntentId : Text;
  };

  public type PromoCode = {
    id : Common.PromoCodeId;
    code : Text;
    discountPercent : Nat; // 0-100
    maxUsageCount : ?Nat; // null = unlimited
    usageCount : Nat;
    minSpendInPaisa : Nat; // 0 = no minimum
    validFrom : Common.Timestamp;
    validUntil : Common.Timestamp;
    isActive : Bool;
    createdAt : Common.Timestamp;
  };

  public type PromoValidation = {
    #ok : PromoCode;
    #notFound;
    #expired;
    #ineligible; // not active or before validFrom
    #minSpend : Nat; // minimum spend threshold not met (value = required paisa)
    #limitExceeded; // max usage reached
    #alreadyUsed; // same user already used this code (reserved for future per-user tracking)
  };
};
