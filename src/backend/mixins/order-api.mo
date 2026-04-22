import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";
import OrderLib "../lib/order";

mixin (
  accessControlState : AccessControl.AccessControlState,
  orders : Map.Map<Common.OrderId, OrderTypes.Order>,
  addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
  promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
  purchasedProductsByUser : Map.Map<Common.UserId, Set.Set<Common.ProductId>>,
  nextOrderId : [var Nat],
  nextAddressId : [var Nat],
  nextPromoCodeId : [var Nat],
) {
  // ── Address book ─────────────────────────────────────────────────────────

  public query ({ caller }) func listAddresses() : async [OrderTypes.Address] {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    OrderLib.listAddresses(addresses, caller);
  };

  public shared ({ caller }) func addAddress(input : OrderTypes.AddressInput) : async { #ok : Common.AddressId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    switch (OrderLib.addAddress(addresses, nextAddressId[0], caller, input)) {
      case (#ok(id)) { nextAddressId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  public shared ({ caller }) func updateAddress(addressId : Common.AddressId, input : OrderTypes.AddressInput) : async { #ok : Bool; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    OrderLib.updateAddress(addresses, caller, addressId, input);
  };

  public shared ({ caller }) func deleteAddress(addressId : Common.AddressId) : async Bool {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    OrderLib.deleteAddress(addresses, caller, addressId);
  };

  public shared ({ caller }) func setDefaultAddress(addressId : Common.AddressId) : async Bool {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    OrderLib.setDefaultAddress(addresses, caller, addressId);
  };

  // ── Orders ────────────────────────────────────────────────────────────────

  public shared ({ caller }) func createOrder(input : OrderTypes.CreateOrderInput) : async { #ok : Common.OrderId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    switch (OrderLib.createOrder(orders, addresses, promoCodes, products, purchasedProductsByUser, nextOrderId[0], caller, input)) {
      case (#ok(id)) { nextOrderId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  public query ({ caller }) func getOrder(orderId : Common.OrderId) : async ?OrderTypes.Order {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);
    OrderLib.getOrder(orders, orderId, caller, isAdmin);
  };

  public query ({ caller }) func listMyOrders() : async [OrderTypes.Order] {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    OrderLib.listOrdersByUser(orders, caller);
  };

  public query ({ caller }) func downloadInvoice(orderId : Common.OrderId) : async Text {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);
    switch (OrderLib.getOrder(orders, orderId, caller, isAdmin)) {
      case null { Runtime.trap("Order not found or access denied") };
      case (?order) { OrderLib.generateInvoiceText(order) };
    };
  };

  // ── Promo codes ───────────────────────────────────────────────────────────

  /// Query promo code validity (informational — no spend context).
  public query func validatePromoCode(code : Text) : async ?OrderTypes.PromoCode {
    OrderLib.validatePromoCode(promoCodes, code, Time.now());
  };

  // ── Admin operations ──────────────────────────────────────────────────────

  public query ({ caller }) func listAllOrders(offset : Nat, limit : Nat) : async [OrderTypes.Order] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    OrderLib.listAllOrders(orders, offset, limit);
  };

  public shared ({ caller }) func updateOrderStatus(orderId : Common.OrderId, status : OrderTypes.OrderStatus, note : Text, estimatedDeliveryDate : ?Int, courierNote : ?Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    OrderLib.updateOrderStatus(orders, orderId, status, note, estimatedDeliveryDate, courierNote);
  };

  public shared ({ caller }) func createPromoCode(
    code : Text,
    discountPercent : Nat,
    maxUsageCount : ?Nat,
    minSpendInPaisa : Nat,
    validFrom : Common.Timestamp,
    validUntil : Common.Timestamp,
  ) : async { #ok : Common.PromoCodeId; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    switch (OrderLib.createPromoCode(promoCodes, nextPromoCodeId[0], code, discountPercent, maxUsageCount, minSpendInPaisa, validFrom, validUntil)) {
      case (#ok(id)) { nextPromoCodeId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  public shared ({ caller }) func deactivatePromoCode(code : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    OrderLib.deactivatePromoCode(promoCodes, code);
  };

  /// Update editable fields of a promo code (admin).
  public shared ({ caller }) func updatePromoCode(code : Text, updates : OrderTypes.PromoCodeUpdateRequest) : async { #ok : Bool; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    OrderLib.updatePromoCode(promoCodes, code, updates);
  };

  /// List all promo codes with usage stats (admin).
  public query ({ caller }) func listPromoCodes() : async [OrderTypes.PromoCode] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    OrderLib.listPromoCodes(promoCodes);
  };

  /// List orders with refundRequested or refunded status (admin).
  public query ({ caller }) func listAllReturns() : async [OrderTypes.Order] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    OrderLib.listAllReturns(orders);
  };

  /// Get ordered quantity report, optionally filtered by date range (admin).
  public query ({ caller }) func getOrderedQuantityReport(fromDate : ?Int, toDate : ?Int) : async [OrderTypes.OrderedQuantityItem] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    OrderLib.getOrderedQuantityReport(orders, fromDate, toDate);
  };
};
