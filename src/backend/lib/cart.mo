import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Common "../types/common";
import CartTypes "../types/cart";
import CatalogTypes "../types/catalog";

module {
  /// Returns all cart items for a user. Returns empty array if user has no cart.
  public func getCart(
    carts : Map.Map<Common.UserId, List.List<CartTypes.CartItem>>,
    userId : Common.UserId,
  ) : [CartTypes.CartItem] {
    switch (carts.get(userId)) {
      case null { [] };
      case (?items) { items.toArray() };
    };
  };

  /// Adds a product to the user's cart.
  /// Validates that product exists and requested quantity does not exceed stock.
  /// If the product is already in the cart, increments quantity (respecting stock cap).
  /// Price snapshot is captured from the current product price.
  public func addToCart(
    carts : Map.Map<Common.UserId, List.List<CartTypes.CartItem>>,
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    userId : Common.UserId,
    productId : Common.ProductId,
    quantity : Nat,
  ) : { #ok; #err : Common.AppError } {
    if (quantity == 0) {
      return #err(#invalidInput("Quantity must be at least 1"));
    };
    // Validate product exists and has stock
    let product = switch (products.get(productId)) {
      case null { return #err(#notFound) };
      case (?p) { p };
    };
    if (product.stockCount == 0) {
      return #err(#insufficientStock);
    };

    let userCart = switch (carts.get(userId)) {
      case null {
        let newList = List.empty<CartTypes.CartItem>();
        carts.add(userId, newList);
        newList;
      };
      case (?existing) { existing };
    };

    // Compute the new total quantity in cart for this product
    let currentQty = switch (userCart.find(func(i : CartTypes.CartItem) : Bool { i.productId == productId })) {
      case (?i) { i.quantity };
      case null { 0 };
    };
    let newTotal = currentQty + quantity;
    if (newTotal > product.stockCount) {
      return #err(#insufficientStock);
    };

    let existingIndex = userCart.findIndex(func(i : CartTypes.CartItem) : Bool {
      i.productId == productId
    });
    switch (existingIndex) {
      case (?idx) {
        let existing = userCart.at(idx);
        // Refresh price snapshot to current price on re-add
        userCart.put(idx, {
          existing with
          quantity = newTotal;
          priceSnapshotInPaisa = product.priceInPaisa;
        });
      };
      case null {
        userCart.add({
          productId;
          quantity;
          addedAt = Time.now();
          priceSnapshotInPaisa = product.priceInPaisa;
        });
      };
    };
    #ok;
  };

  /// Removes a product from the user's cart entirely.
  public func removeFromCart(
    carts : Map.Map<Common.UserId, List.List<CartTypes.CartItem>>,
    userId : Common.UserId,
    productId : Common.ProductId,
  ) {
    switch (carts.get(userId)) {
      case null {};
      case (?userCart) {
        let filtered = userCart.filter(func(i : CartTypes.CartItem) : Bool {
          i.productId != productId
        });
        carts.add(userId, filtered);
      };
    };
  };

  /// Updates the quantity of a specific product in the user's cart.
  /// Validates that the requested quantity does not exceed available stock.
  /// If quantity is 0, the item is removed.
  public func updateCartQuantity(
    carts : Map.Map<Common.UserId, List.List<CartTypes.CartItem>>,
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    userId : Common.UserId,
    productId : Common.ProductId,
    quantity : Nat,
  ) : { #ok; #err : Common.AppError } {
    if (quantity == 0) {
      removeFromCart(carts, userId, productId);
      return #ok;
    };
    // Validate stock
    switch (products.get(productId)) {
      case null { return #err(#notFound) };
      case (?product) {
        if (quantity > product.stockCount) {
          return #err(#insufficientStock);
        };
      };
    };
    switch (carts.get(userId)) {
      case null { return #err(#notFound) };
      case (?userCart) {
        userCart.mapInPlace(func(item : CartTypes.CartItem) : CartTypes.CartItem {
          if (item.productId == productId) {
            { item with quantity }
          } else {
            item
          }
        });
        #ok;
      };
    };
  };

  /// Clears all items from the user's cart (e.g., after checkout).
  public func clearCart(
    carts : Map.Map<Common.UserId, List.List<CartTypes.CartItem>>,
    userId : Common.UserId,
  ) {
    switch (carts.get(userId)) {
      case null {};
      case (?userCart) { userCart.clear() };
    };
  };

  /// Returns all wishlist product IDs for a user.
  public func getWishlist(
    wishlists : Map.Map<Common.UserId, List.List<Common.ProductId>>,
    userId : Common.UserId,
  ) : [Common.ProductId] {
    switch (wishlists.get(userId)) {
      case null { [] };
      case (?items) { items.toArray() };
    };
  };

  /// Adds a product to the user's wishlist.
  /// Validates product exists. No-op if already present.
  public func addToWishlist(
    wishlists : Map.Map<Common.UserId, List.List<Common.ProductId>>,
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    userId : Common.UserId,
    productId : Common.ProductId,
  ) : { #ok; #err : Common.AppError } {
    if (products.get(productId) == null) {
      return #err(#notFound);
    };
    let userWishlist = switch (wishlists.get(userId)) {
      case null {
        let newList = List.empty<Common.ProductId>();
        wishlists.add(userId, newList);
        newList;
      };
      case (?existing) { existing };
    };
    // Only add if not already present
    let alreadyPresent = userWishlist.find(func(pid : Common.ProductId) : Bool {
      pid == productId
    });
    switch (alreadyPresent) {
      case (?_) {};
      case null { userWishlist.add(productId) };
    };
    #ok;
  };

  /// Removes a product from the user's wishlist.
  public func removeFromWishlist(
    wishlists : Map.Map<Common.UserId, List.List<Common.ProductId>>,
    userId : Common.UserId,
    productId : Common.ProductId,
  ) {
    switch (wishlists.get(userId)) {
      case null {};
      case (?userWishlist) {
        let filtered = userWishlist.filter(func(pid : Common.ProductId) : Bool {
          pid != productId
        });
        wishlists.add(userId, filtered);
      };
    };
  };
};
