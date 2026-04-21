import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import NewOrderTypes "types/order";
import NewEnquiryTypes "types/enquiry";

module {
  // ── Old type definitions (copied from .old/src/backend/types/order.mo) ─────

  type OldTimestamp = Int;
  type OldUserId = Principal;
  type OldProductId = Nat;
  type OldOrderId = Nat;
  type OldAddressId = Nat;
  type OldPromoCodeId = Nat;

  type OldOrderStatus = {
    #processing;
    #shipped;
    #delivered;
    #cancelled;
    #refundRequested;
    #refunded;
  };

  type OldOrderItem = {
    productId : OldProductId;
    quantity : Nat;
    priceInPaisa : Nat;
    titleEn : Text;
  };

  type OldAddress = {
    id : OldAddressId;
    userId : OldUserId;
    fullName : Text;
    phone : Text;
    line1 : Text;
    line2 : Text;
    city : Text;
    district : Text;
    state : Text;
    pincode : Text;
    isDefault : Bool;
    createdAt : OldTimestamp;
  };

  type OldStatusUpdate = {
    status : OldOrderStatus;
    updatedAt : OldTimestamp;
    note : Text;
  };

  type OldOrder = {
    id : OldOrderId;
    userId : OldUserId;
    items : [OldOrderItem];
    shippingAddress : OldAddress;
    totalInPaisa : Nat;
    status : OldOrderStatus;
    statusHistory : [OldStatusUpdate];
    stripePaymentIntentId : Text;
    idempotencyKey : Text;
    promoCodeApplied : ?Text;
    discountInPaisa : Nat;
    createdAt : OldTimestamp;
    updatedAt : OldTimestamp;
  };

  // ── Actor state shapes ─────────────────────────────────────────────────────

  type OldActor = {
    orders : Map.Map<OldOrderId, OldOrder>;
  };

  type NewActor = {
    orders : Map.Map<OldOrderId, NewOrderTypes.Order>;
  };

  // ── Migration function ─────────────────────────────────────────────────────

  public func run(old : OldActor) : NewActor {
    let orders = old.orders.map<OldOrderId, OldOrder, NewOrderTypes.Order>(
      func(_id, o) {
        {
          o with
          estimatedDeliveryDate = null : ?OldTimestamp;
          courierNote = null : ?Text;
        };
      }
    );
    { orders };
  };
};
