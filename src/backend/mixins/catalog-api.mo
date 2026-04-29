import Map "mo:core/Map";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import CatalogTypes "../types/catalog";
import CatalogLib "../lib/catalog";

mixin (
  accessControlState : AccessControl.AccessControlState,
  products : Map.Map<Common.ProductId, CatalogTypes.Product>,
  recentlyViewed : Map.Map<Common.UserId, List.List<Common.ProductId>>,
  nextProductId : [var Nat],
  isbnIndex : Map.Map<Text, Common.ProductId>,
  genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
  langIndex : Map.Map<Text, List.List<Common.ProductId>>,
  bestsellersCache : List.List<Common.ProductId>,
) {
  public query func listProducts(
    filterOpt : ?CatalogTypes.ProductFilter,
    sortOpt : ?CatalogTypes.ProductSort,
    offset : Nat,
    limit : Nat,
  ) : async [CatalogTypes.ProductView] {
    CatalogLib.listProducts(products, genreIndex, langIndex, filterOpt, sortOpt, offset, limit);
  };

  public query func getProduct(id : Common.ProductId) : async ?CatalogTypes.ProductView {
    CatalogLib.getProduct(products, id);
  };

  public query func searchProducts(searchTerm : Text, limit : Nat) : async [CatalogTypes.ProductView] {
    CatalogLib.searchProducts(products, searchTerm, limit);
  };

  public shared ({ caller }) func recordRecentlyViewed(productId : Common.ProductId) : async () {
    AccessControl.initialize(accessControlState, caller);
    CatalogLib.recordRecentlyViewed(recentlyViewed, caller, productId);
  };

  public query ({ caller }) func getRecentlyViewed() : async [CatalogTypes.ProductView] {
    CatalogLib.getRecentlyViewed(recentlyViewed, products, caller);
  };

  public query func getBestsellers() : async [CatalogTypes.ProductView] {
    CatalogLib.getBestsellers(products, bestsellersCache);
  };

  // Admin operations
  public shared ({ caller }) func createProduct(input : CatalogTypes.CreateProductInput) : async { #ok : Common.ProductId; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    switch (CatalogLib.createProduct(products, isbnIndex, genreIndex, langIndex, nextProductId[0], input)) {
      case (#ok(id)) { nextProductId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  public shared ({ caller }) func updateProduct(input : CatalogTypes.UpdateProductInput) : async { #ok : Bool; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    CatalogLib.updateProduct(products, isbnIndex, genreIndex, langIndex, input);
  };

  public shared ({ caller }) func deleteProduct(id : Common.ProductId) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admins only");
    };
    CatalogLib.deleteProduct(products, isbnIndex, genreIndex, langIndex, id);
  };

  public shared ({ caller }) func updateStock(id : Common.ProductId, delta : Int) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admins only");
    };
    CatalogLib.updateStock(products, id, delta);
  };

  public shared ({ caller }) func bulkImportProducts(batch : [CatalogTypes.CreateProductInput]) : async CatalogLib.BulkImportResult {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admins only");
    };
    CatalogLib.bulkImportProducts(products, isbnIndex, genreIndex, langIndex, bestsellersCache, nextProductId, batch);
  };

  public shared ({ caller }) func refreshBestsellersCache() : async Nat {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admins only");
    };
    CatalogLib.refreshBestsellersCache(products, bestsellersCache);
    bestsellersCache.size();
  };
};
