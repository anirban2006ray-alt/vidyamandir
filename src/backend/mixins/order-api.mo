import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Common "../types/common";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";
import UserTypes "../types/user";
import OrderLib "../lib/order";
import UserLib "../lib/user";
import Notifications "../lib/notifications";

mixin (
  accessControlState : AccessControl.AccessControlState,
  orders : Map.Map<Common.OrderId, OrderTypes.Order>,
  addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
  promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
  purchasedProductsByUser : Map.Map<Common.UserId, Set.Set<Common.ProductId>>,
  orderIdempotencyKeys : Map.Map<Text, Common.IdempotencyEntry>,
  nextOrderId : [var Nat],
  nextAddressId : [var Nat],
  nextPromoCodeId : [var Nat],
  analyticsCache : [var ?UserTypes.AnalyticsCacheEntry],
  analyticsEvents : List.List<UserTypes.AnalyticsEvent>,
  transform : OutCall.Transform,
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
    switch (OrderLib.createOrder(orders, addresses, promoCodes, products, purchasedProductsByUser, orderIdempotencyKeys, nextOrderId[0], caller, input)) {
      case (#ok(id)) {
        nextOrderId[0] += 1;
        // Invalidate analytics cache — new order changes revenue/totals
        analyticsCache[0] := null;
        // Track 'book_purchased' events for each item
        let now = Time.now();
        for (item in input.items.values()) {
          UserLib.recordEvent(analyticsEvents, {
            eventType = "book_purchased";
            userId = caller.toText();
            productId = ?item.productId;
            orderId = ?id;
            amount = ?(item.quantity * item.priceInPaisa);
            timestamp = now;
          });
        };
        // Fire-and-forget: send order notification to store
        switch (orders.get(id)) {
          case (?order) { ignore Notifications.sendOrderNotification(order, transform) };
          case null {};
        };
        #ok(id);
      };
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

  /// Request a return/refund for a delivered order.
  /// Only the order owner can request a return, and only when the order status is 'delivered'.
  /// Fires a fire-and-forget notification to the store owner.
  public shared ({ caller }) func requestReturn(orderId : Common.OrderId, reason : Text) : async { #ok : Common.OrderId; #err : Common.AppError } {
    if (caller.isAnonymous()) return #err(#unauthorized);
    switch (OrderLib.requestReturn(orders, orderId, caller, reason)) {
      case (#ok(id)) {
        analyticsCache[0] := null;
        UserLib.recordEvent(analyticsEvents, {
          eventType = "return_requested";
          userId = caller.toText();
          productId = null;
          orderId = ?id;
          amount = null;
          timestamp = Time.now();
        });
        switch (orders.get(id)) {
          case (?order) { ignore Notifications.sendReturnNotification(order, reason, transform) };
          case null {};
        };
        #ok(id);
      };
      case (#err(e)) { #err(e) };
    };
  };

  // ── Promo codes ───────────────────────────────────────────────────────────

  /// Query promo code validity (informational — no spend context).
  public query func validatePromoCode(code : Text) : async ?OrderTypes.PromoCode {
    OrderLib.validatePromoCode(promoCodes, code, Time.now());
  };

  // ── Admin operations ──────────────────────────────────────────────────────

  /// List all orders paginated. limit capped at 100, default 20.
  public query ({ caller }) func listAllOrders(offset : Nat, limit : Nat) : async [OrderTypes.Order] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    let cappedLimit = if (limit == 0) 20 else if (limit > 100) 100 else limit;
    OrderLib.listAllOrders(orders, offset, cappedLimit);
  };

  public shared ({ caller }) func updateOrderStatus(orderId : Common.OrderId, status : OrderTypes.OrderStatus, note : Text, estimatedDeliveryDate : ?Int, courierNote : ?Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    let result = OrderLib.updateOrderStatus(orders, orderId, status, note, estimatedDeliveryDate, courierNote);
    if (result) {
      // Invalidate analytics cache when order status changes
      analyticsCache[0] := null;
      // Track return-related analytics events and send notifications
      let now = Time.now();
      switch (status) {
        case (#refundRequested) {
          UserLib.recordEvent(analyticsEvents, {
            eventType = "return_requested";
            userId = "";
            productId = null;
            orderId = ?orderId;
            amount = null;
            timestamp = now;
          });
          switch (orders.get(orderId)) {
            case (?order) { ignore Notifications.sendReturnNotification(order, note, transform) };
            case null {};
          };
        };
        case (#refunded) {
          UserLib.recordEvent(analyticsEvents, {
            eventType = "return_approved";
            userId = "";
            productId = null;
            orderId = ?orderId;
            amount = null;
            timestamp = now;
          });
          switch (orders.get(orderId)) {
            case (?order) { ignore Notifications.sendReturnNotification(order, note, transform) };
            case null {};
          };
        };
        case _ {};
      };
    };
    result;
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
