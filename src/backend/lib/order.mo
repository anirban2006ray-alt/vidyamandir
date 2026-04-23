import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Char "mo:core/Char";
import Common "../types/common";
import OrderTypes "../types/order";
import CatalogTypes "../types/catalog";

module {
  // ── Address validation helpers ─────────────────────────────────────────────

  /// Strip non-digit characters and count digits only.
  func countDigits(t : Text) : Nat {
    var n = 0;
    for (c in t.toIter()) {
      if (c.isDigit()) { n += 1 };
    };
    n;
  };

  /// Validate an Indian phone number: 10 digits, optionally +91 or 0 prefix.
  func isValidPhone(phone : Text) : Bool {
    var digits : Text = "";
    for (c in phone.toIter()) {
      if (c.isDigit()) { digits #= c.toText() };
    };
    let len = digits.size();
    if (len == 10) return true;
    if (len == 12) {
      let prefix = Text.fromArray(digits.toArray().sliceToArray(0, 2));
      return prefix == "91";
    };
    if (len == 11) {
      return digits.toArray()[0] == '0';
    };
    false;
  };

  func validateAddressInput(input : OrderTypes.AddressInput) : ?Text {
    if (input.fullName.size() == 0) return ?"Full name is required";
    if (not isValidPhone(input.phone)) return ?"Phone must be a valid 10-digit Indian number (optionally with +91 or 0 prefix)";
    if (input.line1.size() == 0) return ?"Address line 1 is required";
    if (input.city.size() == 0) return ?"City is required";
    if (input.state.size() == 0) return ?"State is required";
    if (input.pincode.size() != 6) return ?"Pincode must be exactly 6 digits";
    // Pincode must be all digits
    if (countDigits(input.pincode) != 6) return ?"Pincode must contain only digits";
    null;
  };

  // ── Addresses ─────────────────────────────────────────────────────────────

  public func listAddresses(
    addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
    userId : Common.UserId,
  ) : [OrderTypes.Address] {
    switch (addresses.get(userId)) {
      case null { [] };
      case (?list) { list.toArray() };
    };
  };

  public func addAddress(
    addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
    nextAddressId : Nat,
    userId : Common.UserId,
    input : OrderTypes.AddressInput,
  ) : { #ok : Common.AddressId; #err : Common.AppError } {
    switch (validateAddressInput(input)) {
      case (?msg) { return #err(#validationError(msg)) };
      case null {};
    };
    let userAddresses = switch (addresses.get(userId)) {
      case null {
        let newList = List.empty<OrderTypes.Address>();
        addresses.add(userId, newList);
        newList;
      };
      case (?list) { list };
    };
    if (userAddresses.size() >= 5) {
      return #err(#limitExceeded);
    };
    let isFirst = userAddresses.size() == 0;
    let newAddress : OrderTypes.Address = {
      id = nextAddressId;
      userId = userId;
      fullName = input.fullName;
      phone = input.phone;
      line1 = input.line1;
      line2 = input.line2;
      city = input.city;
      district = input.district;
      state = input.state;
      pincode = input.pincode;
      isDefault = isFirst;
      createdAt = Time.now();
    };
    userAddresses.add(newAddress);
    #ok(nextAddressId);
  };

  public func updateAddress(
    addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
    userId : Common.UserId,
    addressId : Common.AddressId,
    input : OrderTypes.AddressInput,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (validateAddressInput(input)) {
      case (?msg) { return #err(#validationError(msg)) };
      case null {};
    };
    switch (addresses.get(userId)) {
      case null { #err(#notFound) };
      case (?userAddresses) {
        var found = false;
        userAddresses.mapInPlace(func(addr) {
          if (addr.id == addressId) {
            found := true;
            {
              addr with
              fullName = input.fullName;
              phone = input.phone;
              line1 = input.line1;
              line2 = input.line2;
              city = input.city;
              district = input.district;
              state = input.state;
              pincode = input.pincode;
            };
          } else { addr };
        });
        if (found) #ok(true) else #err(#notFound);
      };
    };
  };

  public func deleteAddress(
    addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
    userId : Common.UserId,
    addressId : Common.AddressId,
  ) : Bool {
    switch (addresses.get(userId)) {
      case null { false };
      case (?userAddresses) {
        let before = userAddresses.size();
        let wasDefault = switch (userAddresses.find(func(a) { a.id == addressId })) {
          case (?a) { a.isDefault };
          case null { false };
        };
        let filtered = userAddresses.filter(func(a) { a.id != addressId });
        if (filtered.size() == before) { return false };
        userAddresses.clear();
        userAddresses.append(filtered);
        // If deleted address was default, promote the first remaining address
        if (wasDefault) {
          switch (userAddresses.first()) {
            case null {};
            case (?first) {
              let firstId = first.id;
              userAddresses.mapInPlace(func(a) {
                if (a.id == firstId) { { a with isDefault = true } } else { a };
              });
            };
          };
        };
        true;
      };
    };
  };

  public func setDefaultAddress(
    addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
    userId : Common.UserId,
    addressId : Common.AddressId,
  ) : Bool {
    switch (addresses.get(userId)) {
      case null { false };
      case (?userAddresses) {
        let exists = userAddresses.find(func(a) { a.id == addressId });
        switch exists {
          case null { false };
          case _ {
            userAddresses.mapInPlace(func(a) {
              { a with isDefault = a.id == addressId };
            });
            true;
          };
        };
      };
    };
  };

  // ── Promo codes ────────────────────────────────────────────────────────────

  /// Validates a promo code and returns a detailed result variant.
  public func validatePromoCodeDetailed(
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
    code : Text,
    now : Common.Timestamp,
    cartTotalInPaisa : Nat,
  ) : OrderTypes.PromoValidation {
    switch (promoCodes.get(code)) {
      case null { #notFound };
      case (?promo) {
        if (not promo.isActive) { return #ineligible };
        if (now < promo.validFrom) { return #ineligible };
        if (now > promo.validUntil) { return #expired };
        // Check usage cap
        switch (promo.maxUsageCount) {
          case (?max) {
            if (promo.usageCount >= max) { return #limitExceeded };
          };
          case null {};
        };
        // Check minimum spend
        if (cartTotalInPaisa < promo.minSpendInPaisa) {
          return #minSpend(promo.minSpendInPaisa);
        };
        #ok(promo);
      };
    };
  };

  /// Simple validation (without spend check) — used for informational queries.
  public func validatePromoCode(
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
    code : Text,
    now : Common.Timestamp,
  ) : ?OrderTypes.PromoCode {
    switch (promoCodes.get(code)) {
      case null { null };
      case (?promo) {
        let withinUsage = switch (promo.maxUsageCount) {
          case null { true };
          case (?max) { promo.usageCount < max };
        };
        if (promo.isActive and promo.validFrom <= now and promo.validUntil >= now and withinUsage) {
          ?promo;
        } else {
          null;
        };
      };
    };
  };

  public func createPromoCode(
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
    nextId : Nat,
    code : Text,
    discountPercent : Nat,
    maxUsageCount : ?Nat,
    minSpendInPaisa : Nat,
    validFrom : Common.Timestamp,
    validUntil : Common.Timestamp,
  ) : { #ok : Common.PromoCodeId; #err : Common.AppError } {
    if (code.size() == 0) {
      return #err(#validationError("Promo code cannot be empty"));
    };
    if (discountPercent == 0 or discountPercent > 100) {
      return #err(#validationError("Discount percent must be between 1 and 100"));
    };
    if (validUntil <= validFrom) {
      return #err(#validationError("validUntil must be after validFrom"));
    };
    // Reject duplicate code
    if (promoCodes.containsKey(code)) {
      return #err(#duplicateEntry);
    };
    let promo : OrderTypes.PromoCode = {
      id = nextId;
      code = code;
      discountPercent = discountPercent;
      maxUsageCount = maxUsageCount;
      usageCount = 0;
      minSpendInPaisa = minSpendInPaisa;
      validFrom = validFrom;
      validUntil = validUntil;
      isActive = true;
      createdAt = Time.now();
    };
    promoCodes.add(code, promo);
    #ok(nextId);
  };

  public func deactivatePromoCode(
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
    code : Text,
  ) : Bool {
    switch (promoCodes.get(code)) {
      case null { false };
      case (?promo) {
        promoCodes.add(code, { promo with isActive = false });
        true;
      };
    };
  };

  /// Update editable fields of an existing promo code (admin).
  public func updatePromoCode(
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
    code : Text,
    updates : OrderTypes.PromoCodeUpdateRequest,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (promoCodes.get(code)) {
      case null { #err(#notFound) };
      case (?promo) {
        let newDiscountPercent = switch (updates.discountPercent) {
          case (?v) v;
          case null promo.discountPercent;
        };
        if (newDiscountPercent == 0 or newDiscountPercent > 100) {
          return #err(#validationError("Discount percent must be between 1 and 100"));
        };
        let updated : OrderTypes.PromoCode = {
          promo with
          discountPercent = newDiscountPercent;
          maxUsageCount = switch (updates.maxUsageCount) {
            case (?v) ?v;
            case null promo.maxUsageCount;
          };
          minSpendInPaisa = switch (updates.minSpendInPaisa) {
            case (?v) v;
            case null promo.minSpendInPaisa;
          };
          validUntil = switch (updates.validUntil) {
            case (?v) v;
            case null promo.validUntil;
          };
          isActive = switch (updates.isActive) {
            case (?v) v;
            case null promo.isActive;
          };
        };
        promoCodes.add(code, updated);
        #ok(true);
      };
    };
  };

  /// List all promo codes (admin).
  public func listPromoCodes(
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
  ) : [OrderTypes.PromoCode] {
    promoCodes.entries()
      .map<(Text, OrderTypes.PromoCode), OrderTypes.PromoCode>(func((_, p)) { p })
      .toArray();
  };

  /// List all orders with status refundRequested or refunded (admin).
  public func listAllReturns(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
  ) : [OrderTypes.Order] {
    orders.entries()
      .filter(func((_, o)) {
        switch (o.status) {
          case (#refundRequested or #refunded) true;
          case (_) false;
        }
      })
      .map<(Common.OrderId, OrderTypes.Order), OrderTypes.Order>(func((_, o)) { o })
      .toArray();
  };

  /// Aggregate ordered quantities per product within an optional date range.
  public func getOrderedQuantityReport(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    fromDate : ?Int,
    toDate : ?Int,
  ) : [OrderTypes.OrderedQuantityItem] {
    let acc = Map.empty<Common.ProductId, (Text, Nat, Nat)>(); // productId -> (title, qty, revenue)
    orders.entries().forEach(func((_, order)) {
      let inRange = switch (fromDate, toDate) {
        case (?from, ?to) { order.createdAt >= from and order.createdAt <= to };
        case (?from, null) { order.createdAt >= from };
        case (null, ?to) { order.createdAt <= to };
        case (null, null) { true };
      };
      if (inRange) {
        for (item in order.items.values()) {
          let revenue = item.quantity * item.priceInPaisa;
          switch (acc.get(item.productId)) {
            case null {
              acc.add(item.productId, (item.titleEn, item.quantity, revenue));
            };
            case (?(title, qty, rev)) {
              acc.add(item.productId, (title, qty + item.quantity, rev + revenue));
            };
          };
        };
      };
    });
    acc.entries()
      .map<(Common.ProductId, (Text, Nat, Nat)), OrderTypes.OrderedQuantityItem>(func((productId, (productTitle, totalOrdered, totalRevenue))) {
        { productId; productTitle; totalOrdered; totalRevenue };
      })
      .toArray();
  };

  // ── Orders ─────────────────────────────────────────────────────────────────

  /// Creates an order with full validation and idempotency:
  /// 1. Address must exist for caller.
  /// 2. Each item must exist in catalog and have sufficient stock.
  /// 3. Promo code validated with detailed error variants.
  /// 4. Idempotency key dedup: if key provided and exists, return existing orderId.
  /// 5. Stripe payment intent dedup as fallback.
  /// 6. Stock is decremented for each item on success.
  public func createOrder(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    addresses : Map.Map<Common.UserId, List.List<OrderTypes.Address>>,
    promoCodes : Map.Map<Text, OrderTypes.PromoCode>,
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    purchasedProductsByUser : Map.Map<Common.UserId, Set.Set<Common.ProductId>>,
    orderIdempotencyKeys : Map.Map<Text, Common.IdempotencyEntry>,
    nextOrderId : Nat,
    userId : Common.UserId,
    input : OrderTypes.CreateOrderInput,
  ) : { #ok : Common.OrderId; #err : Common.AppError } {
    // Validate items array is not empty
    if (input.items.size() == 0) {
      return #err(#validationError("Order must contain at least one item"));
    };

    // Validate stripePaymentIntentId
    if (input.stripePaymentIntentId.size() == 0) {
      return #err(#validationError("Stripe payment intent ID is required"));
    };

    // ── Idempotency key check (explicit key from input) ──────────────────────
    let now = Time.now();
    let oneDayNs : Int = 86_400_000_000_000; // 24 hours in nanoseconds

    switch (input.idempotencyKey) {
      case (?key) {
        switch (orderIdempotencyKeys.get(key)) {
          case (?entry) {
            // Prune expired entry silently and fall through to create new
            if (now - entry.createdAt < oneDayNs) {
              return #ok(entry.orderId);
            } else {
              orderIdempotencyKeys.remove(key);
            };
          };
          case null {};
        };
      };
      case null {};
    };

    // ── Stripe payment intent dedup (fallback) ───────────────────────────────
    let existingDuplicate = orders.entries().find(func((_, o)) {
      o.userId == userId and o.stripePaymentIntentId == input.stripePaymentIntentId
    });
    if (existingDuplicate != null) {
      switch (existingDuplicate) {
        case (?(_, existing)) { return #ok(existing.id) };
        case null {};
      };
    };

    // Resolve shipping address
    let shippingAddr = switch (addresses.get(userId)) {
      case null { return #err(#notFound) };
      case (?userAddresses) {
        switch (userAddresses.find(func(a) { a.id == input.shippingAddressId })) {
          case null { return #err(#notFound) };
          case (?addr) { addr };
        };
      };
    };

    // Validate all items: existence and stock
    for (item in input.items.values()) {
      if (item.quantity == 0) {
        return #err(#validationError("Item quantity must be at least 1"));
      };
      switch (products.get(item.productId)) {
        case null { return #err(#notFound) };
        case (?product) {
          if (product.stockCount < item.quantity) {
            return #err(#insufficientStock);
          };
        };
      };
    };

    // Calculate total
    var totalInPaisa : Nat = 0;
    for (item in input.items.values()) {
      totalInPaisa += item.quantity * item.priceInPaisa;
    };

    // Apply promo code if provided
    var discountInPaisa : Nat = 0;
    var promoCodeApplied : ?Text = null;
    switch (input.promoCode) {
      case null {};
      case (?code) {
        switch (validatePromoCodeDetailed(promoCodes, code, now, totalInPaisa)) {
          case (#ok(promo)) {
            discountInPaisa := totalInPaisa * promo.discountPercent / 100;
            promoCodeApplied := ?code;
            promoCodes.add(code, { promo with usageCount = promo.usageCount + 1 });
          };
          case (#notFound) { return #err(#notFound) };
          case (#expired) { return #err(#expired) };
          case (#ineligible) { return #err(#validationError("Promo code is not currently active")) };
          case (#limitExceeded) { return #err(#limitExceeded) };
          case (#minSpend(required)) { return #err(#minSpend(required)) };
          case (#alreadyUsed) { return #err(#validationError("You have already used this promo code")) };
        };
      };
    };

    if (discountInPaisa > totalInPaisa) { discountInPaisa := totalInPaisa };
    let finalTotal : Nat = do {
      let diff : Int = totalInPaisa - discountInPaisa;
      if (diff >= 0) Int.abs(diff) else 0;
    };

    // Build internal idempotency key from stripe payment intent
    let internalKey = userId.toText() # ":" # input.stripePaymentIntentId;

    let orderId = nextOrderId;
    let initialStatus : OrderTypes.StatusUpdate = {
      status = #processing;
      updatedAt = now;
      note = "Order placed";
    };
    let newOrder : OrderTypes.Order = {
      id = orderId;
      userId = userId;
      items = input.items;
      shippingAddress = shippingAddr;
      totalInPaisa = finalTotal;
      status = #processing;
      statusHistory = [initialStatus];
      stripePaymentIntentId = input.stripePaymentIntentId;
      idempotencyKey = internalKey;
      promoCodeApplied = promoCodeApplied;
      discountInPaisa = discountInPaisa;
      estimatedDeliveryDate = null;
      courierNote = null;
      createdAt = now;
      updatedAt = now;
    };
    orders.add(orderId, newOrder);

    // Store explicit idempotency key → orderId if provided
    switch (input.idempotencyKey) {
      case (?key) {
        orderIdempotencyKeys.add(key, { orderId; createdAt = now });
      };
      case null {};
    };

    // Decrement stock for each ordered item
    for (item in input.items.values()) {
      switch (products.get(item.productId)) {
        case null {};
        case (?product) {
          let newStock : Nat = do {
            let diff : Int = product.stockCount - item.quantity;
            if (diff >= 0) Int.abs(diff) else 0;
          };
          products.add(item.productId, { product with stockCount = newStock; updatedAt = now });
        };
      };
    };

    // Track purchased products for review eligibility
    let productSet = switch (purchasedProductsByUser.get(userId)) {
      case null {
        let s = Set.empty<Common.ProductId>();
        purchasedProductsByUser.add(userId, s);
        s;
      };
      case (?s) { s };
    };
    for (item in input.items.values()) {
      productSet.add(item.productId);
    };

    #ok(orderId);
  };

  public func getOrder(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    orderId : Common.OrderId,
    callerId : Common.UserId,
    isAdmin : Bool,
  ) : ?OrderTypes.Order {
    switch (orders.get(orderId)) {
      case null { null };
      case (?order) {
        if (isAdmin or order.userId == callerId) { ?order } else { null };
      };
    };
  };

  public func listOrdersByUser(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    userId : Common.UserId,
  ) : [OrderTypes.Order] {
    orders.entries()
      .filter(func((_, o)) { o.userId == userId })
      .map(func((_, o) : (Common.OrderId, OrderTypes.Order)) : OrderTypes.Order { o })
      .toArray();
  };

  public func listAllOrders(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    offset : Nat,
    limit : Nat,
  ) : [OrderTypes.Order] {
    let all = orders.entries()
      .map(func((_, o) : (Common.OrderId, OrderTypes.Order)) : OrderTypes.Order { o })
      .toArray();
    let size = all.size();
    if (offset >= size) { return [] };
    let end = if (offset + limit > size) size else offset + limit;
    all.sliceToArray(offset, end);
  };

  public func updateOrderStatus(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    orderId : Common.OrderId,
    status : OrderTypes.OrderStatus,
    note : Text,
    estimatedDeliveryDate : ?Common.Timestamp,
    courierNote : ?Text,
  ) : Bool {
    switch (orders.get(orderId)) {
      case null { false };
      case (?order) {
        let now = Time.now();
        let statusEntry : OrderTypes.StatusUpdate = { status; updatedAt = now; note };
        let updated : OrderTypes.Order = {
          order with
          status = status;
          statusHistory = order.statusHistory.concat([statusEntry]);
          estimatedDeliveryDate = switch (estimatedDeliveryDate) {
            case (?d) ?d;
            case null order.estimatedDeliveryDate;
          };
          courierNote = switch (courierNote) {
            case (?n) ?n;
            case null order.courierNote;
          };
          updatedAt = now;
        };
        orders.add(orderId, updated);
        true;
      };
    };
  };

  /// User-initiated return/refund request.
  /// Only orders owned by the caller and in 'delivered' status can be returned.
  /// Returns #ok(orderId) on success or a structured error.
  public func requestReturn(
    orders : Map.Map<Common.OrderId, OrderTypes.Order>,
    orderId : Common.OrderId,
    callerId : Common.UserId,
    reason : Text,
  ) : { #ok : Common.OrderId; #err : Common.AppError } {
    switch (orders.get(orderId)) {
      case null { #err(#notFound) };
      case (?order) {
        if (order.userId != callerId) {
          return #err(#unauthorized);
        };
        switch (order.status) {
          case (#delivered) {};
          case (#refundRequested) { return #err(#invalidInput("Return has already been requested for this order")) };
          case (#refunded) { return #err(#invalidInput("This order has already been refunded")) };
          case (_) { return #err(#invalidInput("Only delivered orders can be returned")) };
        };
        let now = Time.now();
        let trimmedReason = if (reason.size() > 500) Text.fromArray(reason.toArray().sliceToArray(0, 500)) else reason;
        let note = if (trimmedReason.size() > 0) "Return requested. Reason: " # trimmedReason else "Return requested.";
        let statusEntry : OrderTypes.StatusUpdate = {
          status = #refundRequested;
          updatedAt = now;
          note;
        };
        let updated : OrderTypes.Order = {
          order with
          status = #refundRequested;
          statusHistory = order.statusHistory.concat([statusEntry]);
          updatedAt = now;
        };
        orders.add(orderId, updated);
        #ok(orderId);
      };
    };
  };

  // ── Invoice ────────────────────────────────────────────────────────────────

  public func generateInvoiceText(order : OrderTypes.Order) : Text {
    var lines : Text = "=== VIDYAMANDIR INVOICE ===\n";
    lines #= "Order ID: " # order.id.toText() # "\n";
    lines #= "Date: " # order.createdAt.toText() # "\n";
    lines #= "Status: " # statusToText(order.status) # "\n\n";
    lines #= "Ship To:\n";
    lines #= order.shippingAddress.fullName # "\n";
    lines #= order.shippingAddress.line1 # "\n";
    if (order.shippingAddress.line2 != "") {
      lines #= order.shippingAddress.line2 # "\n";
    };
    lines #= order.shippingAddress.city # ", " # order.shippingAddress.district # "\n";
    lines #= order.shippingAddress.state # " - " # order.shippingAddress.pincode # "\n";
    lines #= "Phone: " # order.shippingAddress.phone # "\n\n";
    lines #= "Items:\n";
    for (item in order.items.values()) {
      let itemTotal = item.quantity * item.priceInPaisa;
      lines #= "  " # item.titleEn # " x" # item.quantity.toText() # " @ Rs." # (item.priceInPaisa / 100).toText() # " = Rs." # (itemTotal / 100).toText() # "\n";
    };
    lines #= "\n";
    switch (order.promoCodeApplied) {
      case null {};
      case (?code) {
        lines #= "Promo Code: " # code # " (-Rs." # (order.discountInPaisa / 100).toText() # ")\n";
      };
    };
    lines #= "Total: Rs." # (order.totalInPaisa / 100).toText() # "\n";
    lines #= "\nPayment Ref: " # order.stripePaymentIntentId # "\n";
    lines #= "===========================\n";
    lines;
  };

  // ── Private helpers ────────────────────────────────────────────────────────

  func statusToText(status : OrderTypes.OrderStatus) : Text {
    switch status {
      case (#processing) { "Processing" };
      case (#shipped) { "Shipped" };
      case (#delivered) { "Delivered" };
      case (#cancelled) { "Cancelled" };
      case (#refundRequested) { "Refund Requested" };
      case (#refunded) { "Refunded" };
    };
  };
};
