import Map "mo:core/Map";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Common "../types/common";
import CartTypes "../types/cart";
import CatalogTypes "../types/catalog";
import CartLib "../lib/cart";

mixin (
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
  carts : Map.Map<Common.UserId, List.List<CartTypes.CartItem>>,
  wishlists : Map.Map<Common.UserId, List.List<Common.ProductId>>,
) {
  /// Returns the current user's cart items.
  public query ({ caller }) func getCart() : async [CartTypes.CartItem] {
    if (caller.isAnonymous()) { Runtime.trap("Must be logged in") };
    CartLib.getCart(carts, caller);
  };

  /// Adds a product to the current user's cart.
  /// Validates product existence, stock availability, and captures a price snapshot.
  public shared ({ caller }) func addToCart(
    productId : Common.ProductId,
    quantity : Nat,
  ) : async { #ok; #err : Common.AppError } {
    if (caller.isAnonymous()) { return #err(#unauthorized) };
    CartLib.addToCart(carts, products, caller, productId, quantity);
  };

  /// Removes a product from the current user's cart.
  public shared ({ caller }) func removeFromCart(productId : Common.ProductId) : async () {
    if (caller.isAnonymous()) { Runtime.trap("Must be logged in") };
    CartLib.removeFromCart(carts, caller, productId);
  };

  /// Updates the quantity of a product in the current user's cart.
  /// Setting quantity to 0 removes the item.
  public shared ({ caller }) func updateCartQuantity(
    productId : Common.ProductId,
    quantity : Nat,
  ) : async { #ok; #err : Common.AppError } {
    if (caller.isAnonymous()) { return #err(#unauthorized) };
    CartLib.updateCartQuantity(carts, products, caller, productId, quantity);
  };

  /// Clears all items from the current user's cart (e.g., after checkout).
  public shared ({ caller }) func clearCart() : async () {
    if (caller.isAnonymous()) { Runtime.trap("Must be logged in") };
    CartLib.clearCart(carts, caller);
  };

  /// Returns the current user's wishlist as an array of product IDs.
  public query ({ caller }) func getWishlist() : async [Common.ProductId] {
    if (caller.isAnonymous()) { Runtime.trap("Must be logged in") };
    CartLib.getWishlist(wishlists, caller);
  };

  /// Adds a product to the current user's wishlist. Validates product exists.
  public shared ({ caller }) func addToWishlist(productId : Common.ProductId) : async { #ok; #err : Common.AppError } {
    if (caller.isAnonymous()) { return #err(#unauthorized) };
    CartLib.addToWishlist(wishlists, products, caller, productId);
  };

  /// Removes a product from the current user's wishlist.
  public shared ({ caller }) func removeFromWishlist(productId : Common.ProductId) : async () {
    if (caller.isAnonymous()) { Runtime.trap("Must be logged in") };
    CartLib.removeFromWishlist(wishlists, caller, productId);
  };
};
