import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Common "../types/common";
import CatalogTypes "../types/catalog";

module {
  // Convert internal Product to shared ProductView
  public func toView(product : CatalogTypes.Product) : CatalogTypes.ProductView {
    let avg : Float = if (product.reviewCount == 0) {
      0.0;
    } else {
      product.totalRatingScore.toFloat() / product.reviewCount.toFloat();
    };
    {
      id = product.id;
      info = product.info;
      isbn = product.isbn;
      genre = product.genre;
      language = product.language;
      publisher = product.publisher;
      publicationDate = product.publicationDate;
      coverImageUrl = product.coverImageUrl;
      priceInPaisa = product.priceInPaisa;
      stockCount = product.stockCount;
      averageRating = avg;
      reviewCount = product.reviewCount;
      createdAt = product.createdAt;
    };
  };

  func matchesFilter(product : CatalogTypes.Product, filter : CatalogTypes.ProductFilter) : Bool {
    // genre filter
    switch (filter.genre) {
      case (?g) { if (product.genre != g) return false };
      case null {};
    };
    // language filter
    switch (filter.language) {
      case (?lang) { if (product.language != lang) return false };
      case null {};
    };
    // min price filter
    switch (filter.minPriceInPaisa) {
      case (?minP) { if (product.priceInPaisa < minP) return false };
      case null {};
    };
    // max price filter
    switch (filter.maxPriceInPaisa) {
      case (?maxP) { if (product.priceInPaisa > maxP) return false };
      case null {};
    };
    // min rating filter
    switch (filter.minRating) {
      case (?minR) {
        let avg = if (product.reviewCount == 0) { 0.0 } else {
          product.totalRatingScore.toFloat() / product.reviewCount.toFloat();
        };
        if (avg < minR) return false;
      };
      case null {};
    };
    // in-stock filter
    if (filter.inStockOnly and product.stockCount == 0) return false;
    // search query
    switch (filter.searchQuery) {
      case (?q) {
        let lower = q.toLower();
        let matchesText = product.info.titleEn.toLower().contains(#text lower)
          or product.info.titleBn.toLower().contains(#text lower)
          or product.info.authorEn.toLower().contains(#text lower)
          or product.info.authorBn.toLower().contains(#text lower)
          or product.isbn.toLower().contains(#text lower);
        if (not matchesText) return false;
      };
      case null {};
    };
    true;
  };

  func compareProducts(a : CatalogTypes.Product, b : CatalogTypes.Product, sort : CatalogTypes.ProductSort) : { #less; #equal; #greater } {
    let order = switch (sort.field) {
      case (#price) {
        if (a.priceInPaisa < b.priceInPaisa) #less
        else if (a.priceInPaisa > b.priceInPaisa) #greater
        else #equal;
      };
      case (#rating) {
        let avgA = if (a.reviewCount == 0) 0.0 else a.totalRatingScore.toFloat() / a.reviewCount.toFloat();
        let avgB = if (b.reviewCount == 0) 0.0 else b.totalRatingScore.toFloat() / b.reviewCount.toFloat();
        if (avgA < avgB) #less
        else if (avgA > avgB) #greater
        else #equal;
      };
      case (#publicationDate) {
        if (a.publicationDate < b.publicationDate) #less
        else if (a.publicationDate > b.publicationDate) #greater
        else #equal;
      };
      case (#title) {
        a.info.titleEn.compare(b.info.titleEn);
      };
    };
    switch (sort.order) {
      case (#asc) order;
      case (#desc) {
        switch (order) {
          case (#less) #greater;
          case (#greater) #less;
          case (#equal) #equal;
        };
      };
    };
  };

  public func listProducts(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    filterOpt : ?CatalogTypes.ProductFilter,
    sortOpt : ?CatalogTypes.ProductSort,
    offset : Nat,
    limit : Nat,
  ) : [CatalogTypes.ProductView] {
    // Collect matching products
    let matched = List.empty<CatalogTypes.Product>();
    for ((_, product) in products.entries()) {
      let passes = switch (filterOpt) {
        case (?f) matchesFilter(product, f);
        case null true;
      };
      if (passes) matched.add(product);
    };

    // Sort if requested
    let sorted = switch (sortOpt) {
      case (?s) {
        matched.sort(func(a, b) = compareProducts(a, b, s));
      };
      case null matched;
    };

    // Paginate
    let total = sorted.size();
    if (offset >= total) return [];
    let end = Nat.min(offset + limit, total);
    let slice = sorted.sliceToArray(offset, end);
    slice.map<CatalogTypes.Product, CatalogTypes.ProductView>(toView);
  };

  public func getProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    id : Common.ProductId,
  ) : ?CatalogTypes.ProductView {
    switch (products.get(id)) {
      case (?p) ?toView(p);
      case null null;
    };
  };

  func validateProductLabel(info : CatalogTypes.ProductLabel) : ?Text {
    if (info.titleEn.size() == 0) return ?"English title is required";
    if (info.authorEn.size() == 0) return ?"English author is required";
    null;
  };

  public func createProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    nextId : Nat,
    input : CatalogTypes.CreateProductInput,
  ) : { #ok : Common.ProductId; #err : Common.AppError } {
    switch (validateProductLabel(input.info)) {
      case (?msg) { return #err(#invalidInput(msg)) };
      case null {};
    };
    if (input.isbn.size() == 0) {
      return #err(#invalidInput("ISBN is required"));
    };
    if (input.publisher.size() == 0) {
      return #err(#invalidInput("Publisher is required"));
    };
    // Check for duplicate ISBN
    let duplicate = products.entries().find(func((_, p)) { p.isbn == input.isbn });
    if (duplicate != null) {
      return #err(#alreadyExists);
    };
    let now = Time.now();
    let product : CatalogTypes.Product = {
      id = nextId;
      info = input.info;
      isbn = input.isbn;
      genre = input.genre;
      language = input.language;
      publisher = input.publisher;
      publicationDate = input.publicationDate;
      coverImageUrl = input.coverImageUrl;
      priceInPaisa = input.priceInPaisa;
      stockCount = input.stockCount;
      totalRatingScore = 0;
      reviewCount = 0;
      createdAt = now;
      updatedAt = now;
    };
    products.add(nextId, product);
    #ok(nextId);
  };

  public func updateProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    input : CatalogTypes.UpdateProductInput,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (products.get(input.id)) {
      case null { #err(#notFound) };
      case (?existing) {
        // Validate info if provided
        switch (input.info) {
          case (?info) {
            switch (validateProductLabel(info)) {
              case (?msg) { return #err(#invalidInput(msg)) };
              case null {};
            };
          };
          case null {};
        };
        // Validate ISBN uniqueness if changed
        switch (input.isbn) {
          case (?newIsbn) {
            if (newIsbn.size() == 0) {
              return #err(#invalidInput("ISBN cannot be empty"));
            };
            let duplicate = products.entries().find(func((_, p)) {
              p.isbn == newIsbn and p.id != input.id
            });
            if (duplicate != null) {
              return #err(#alreadyExists);
            };
          };
          case null {};
        };
        let now = Time.now();
        let updated : CatalogTypes.Product = {
          existing with
          info = switch (input.info) { case (?v) v; case null existing.info };
          isbn = switch (input.isbn) { case (?v) v; case null existing.isbn };
          genre = switch (input.genre) { case (?v) v; case null existing.genre };
          language = switch (input.language) { case (?v) v; case null existing.language };
          publisher = switch (input.publisher) { case (?v) v; case null existing.publisher };
          publicationDate = switch (input.publicationDate) { case (?v) v; case null existing.publicationDate };
          coverImageUrl = switch (input.coverImageUrl) { case (?v) v; case null existing.coverImageUrl };
          priceInPaisa = switch (input.priceInPaisa) { case (?v) v; case null existing.priceInPaisa };
          stockCount = switch (input.stockCount) { case (?v) v; case null existing.stockCount };
          updatedAt = now;
        };
        products.add(input.id, updated);
        #ok(true);
      };
    };
  };

  public func deleteProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    id : Common.ProductId,
  ) : Bool {
    switch (products.get(id)) {
      case null false;
      case (?_) {
        products.remove(id);
        true;
      };
    };
  };

  public func updateStock(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    id : Common.ProductId,
    delta : Int,
  ) : Bool {
    switch (products.get(id)) {
      case null false;
      case (?existing) {
        let newStock : Int = existing.stockCount.toInt() + delta;
        if (newStock < 0) return false;
        let updated : CatalogTypes.Product = {
          existing with
          stockCount = newStock.toNat();
          updatedAt = Time.now();
        };
        products.add(id, updated);
        true;
      };
    };
  };

  public func searchProducts(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    searchTerm : Text,
    limit : Nat,
  ) : [CatalogTypes.ProductView] {
    if (searchTerm.size() == 0) { return [] };
    let lower = searchTerm.toLower();
    let results = List.empty<CatalogTypes.ProductView>();
    for ((_, product) in products.entries()) {
      if (results.size() < limit) {
        let matches = product.info.titleEn.toLower().contains(#text lower)
          or product.info.titleBn.toLower().contains(#text lower)
          or product.info.authorEn.toLower().contains(#text lower)
          or product.info.authorBn.toLower().contains(#text lower)
          or product.isbn.toLower().contains(#text lower)
          or product.info.descriptionEn.toLower().contains(#text lower);
        if (matches) results.add(toView(product));
      };
    };
    results.toArray();
  };

  public func getRecentlyViewed(
    recentlyViewed : Map.Map<Common.UserId, List.List<Common.ProductId>>,
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    userId : Common.UserId,
  ) : [CatalogTypes.ProductView] {
    switch (recentlyViewed.get(userId)) {
      case null [];
      case (?idList) {
        let views = List.empty<CatalogTypes.ProductView>();
        for (pid in idList.values()) {
          switch (products.get(pid)) {
            case (?p) views.add(toView(p));
            case null {};
          };
        };
        views.toArray();
      };
    };
  };

  public func recordRecentlyViewed(
    recentlyViewed : Map.Map<Common.UserId, List.List<Common.ProductId>>,
    userId : Common.UserId,
    productId : Common.ProductId,
  ) {
    let existing : List.List<Common.ProductId> = switch (recentlyViewed.get(userId)) {
      case (?list) list;
      case null List.empty<Common.ProductId>();
    };
    // Remove duplicate if already present
    let deduped = existing.filter(func(pid) { pid != productId });
    // Prepend new entry
    let newList = List.empty<Common.ProductId>();
    newList.add(productId);
    for (pid in deduped.values()) {
      newList.add(pid);
    };
    // Trim to max 20 items
    if (newList.size() > 20) {
      newList.truncate(20);
    };
    recentlyViewed.add(userId, newList);
  };
};
