import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Common "../types/common";
import CatalogTypes "../types/catalog";

module {
  // ── BulkImport result type ────────────────────────────────────────────────
  public type BulkImportResult = {
    inserted : Nat;
    skipped : Nat;
    errors : [(Nat, Text)]; // (batchIndex, reason)
  };

  // ── Variant-to-Text key helpers ───────────────────────────────────────────
  public func genreKey(g : CatalogTypes.Genre) : Text {
    switch g {
      case (#fiction) "fiction";
      case (#nonFiction) "nonFiction";
      case (#academic) "academic";
      case (#childrens) "childrens";
      case (#bengaliClassics) "bengaliClassics";
      case (#poetry) "poetry";
      case (#biography) "biography";
      case (#science) "science";
      case (#history) "history";
      case (#religion) "religion";
      case (#other) "other";
    };
  };

  public func langKey(l : CatalogTypes.Language) : Text {
    switch l {
      case (#english) "english";
      case (#bengali) "bengali";
      case (#bilingual) "bilingual";
    };
  };

  // ── Convert internal Product to shared ProductView ────────────────────────
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

  // ── Helpers: add a product to all secondary indices ───────────────────────
  func indexProduct(
    isbnIndex : Map.Map<Text, Common.ProductId>,
    genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
    langIndex : Map.Map<Text, List.List<Common.ProductId>>,
    product : CatalogTypes.Product,
  ) {
    isbnIndex.add(product.isbn, product.id);
    // genre index
    let gk = genreKey(product.genre);
    let gList : List.List<Common.ProductId> = switch (genreIndex.get(gk)) {
      case (?l) l;
      case null {
        let fresh = List.empty<Common.ProductId>();
        genreIndex.add(gk, fresh);
        fresh;
      };
    };
    gList.add(product.id);
    // language index
    let lk = langKey(product.language);
    let lList : List.List<Common.ProductId> = switch (langIndex.get(lk)) {
      case (?l) l;
      case null {
        let fresh = List.empty<Common.ProductId>();
        langIndex.add(lk, fresh);
        fresh;
      };
    };
    lList.add(product.id);
  };

  func removeFromIndex(
    ids : List.List<Common.ProductId>,
    targetId : Common.ProductId,
  ) {
    let filtered = ids.filter(func(pid) { pid != targetId });
    ids.clear();
    for (pid in filtered.values()) { ids.add(pid) };
  };

  // ── Filter predicate ──────────────────────────────────────────────────────
  func matchesFilter(product : CatalogTypes.Product, filter : CatalogTypes.ProductFilter) : Bool {
    switch (filter.genre) {
      case (?g) { if (product.genre != g) return false };
      case null {};
    };
    switch (filter.language) {
      case (?lang) { if (product.language != lang) return false };
      case null {};
    };
    switch (filter.minPriceInPaisa) {
      case (?minP) { if (product.priceInPaisa < minP) return false };
      case null {};
    };
    switch (filter.maxPriceInPaisa) {
      case (?maxP) { if (product.priceInPaisa > maxP) return false };
      case null {};
    };
    switch (filter.minRating) {
      case (?minR) {
        let avg = if (product.reviewCount == 0) { 0.0 } else {
          product.totalRatingScore.toFloat() / product.reviewCount.toFloat();
        };
        if (avg < minR) return false;
      };
      case null {};
    };
    if (filter.inStockOnly and product.stockCount == 0) return false;
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

  // ── listProducts — uses secondary indices when available ─────────────────
  public func listProducts(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
    langIndex : Map.Map<Text, List.List<Common.ProductId>>,
    filterOpt : ?CatalogTypes.ProductFilter,
    sortOpt : ?CatalogTypes.ProductSort,
    offset : Nat,
    limit : Nat,
  ) : [CatalogTypes.ProductView] {
    let matched = List.empty<CatalogTypes.Product>();

    // Decide candidate set: prefer secondary index when a single key filter exists
    let usedGenreIndex = switch (filterOpt) {
      case (?f) {
        switch (f.genre) {
          case (?g) {
            switch (genreIndex.get(genreKey(g))) {
              case (?ids) {
                for (pid in ids.values()) {
                  switch (products.get(pid)) {
                    case (?p) {
                      if (matchesFilter(p, f)) matched.add(p);
                    };
                    case null {};
                  };
                };
                true;
              };
              case null true;
            };
          };
          case null false;
        };
      };
      case null false;
    };

    if (not usedGenreIndex) {
      let usedLangIndex = switch (filterOpt) {
        case (?f) {
          switch (f.language) {
            case (?lang) {
              switch (langIndex.get(langKey(lang))) {
                case (?ids) {
                  for (pid in ids.values()) {
                    switch (products.get(pid)) {
                      case (?p) {
                        if (matchesFilter(p, f)) matched.add(p);
                      };
                      case null {};
                    };
                  };
                  true;
                };
                case null true;
              };
            };
            case null false;
          };
        };
        case null false;
      };

      if (not usedLangIndex) {
        // Full scan fallback
        for ((_, product) in products.entries()) {
          let passes = switch (filterOpt) {
            case (?f) matchesFilter(product, f);
            case null true;
          };
          if (passes) matched.add(product);
        };
      };
    };

    let sorted = switch (sortOpt) {
      case (?s) {
        matched.sort(func(a, b) = compareProducts(a, b, s));
      };
      case null matched;
    };

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

  // ── createProduct — O(1) ISBN dedup via isbnIndex ─────────────────────────
  public func createProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    isbnIndex : Map.Map<Text, Common.ProductId>,
    genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
    langIndex : Map.Map<Text, List.List<Common.ProductId>>,
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
    // O(1) duplicate ISBN check
    if (isbnIndex.containsKey(input.isbn)) {
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
    indexProduct(isbnIndex, genreIndex, langIndex, product);
    #ok(nextId);
  };

  public func updateProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    isbnIndex : Map.Map<Text, Common.ProductId>,
    genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
    langIndex : Map.Map<Text, List.List<Common.ProductId>>,
    input : CatalogTypes.UpdateProductInput,
  ) : { #ok : Bool; #err : Common.AppError } {
    switch (products.get(input.id)) {
      case null { #err(#notFound) };
      case (?existing) {
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
            switch (isbnIndex.get(newIsbn)) {
              case (?existingId) {
                if (existingId != input.id) {
                  return #err(#alreadyExists);
                };
              };
              case null {};
            };
          };
          case null {};
        };
        let now = Time.now();
        let oldIsbn = existing.isbn;
        let oldGenreKey = genreKey(existing.genre);
        let oldLangKey = langKey(existing.language);
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

        // Update isbnIndex if ISBN changed
        if (oldIsbn != updated.isbn) {
          isbnIndex.remove(oldIsbn);
          isbnIndex.add(updated.isbn, updated.id);
        };

        // Update genreIndex if genre changed
        let newGenreKey = genreKey(updated.genre);
        if (oldGenreKey != newGenreKey) {
          switch (genreIndex.get(oldGenreKey)) {
            case (?ids) removeFromIndex(ids, updated.id);
            case null {};
          };
          let gList : List.List<Common.ProductId> = switch (genreIndex.get(newGenreKey)) {
            case (?l) l;
            case null {
              let fresh = List.empty<Common.ProductId>();
              genreIndex.add(newGenreKey, fresh);
              fresh;
            };
          };
          gList.add(updated.id);
        };

        // Update langIndex if language changed
        let newLangKey = langKey(updated.language);
        if (oldLangKey != newLangKey) {
          switch (langIndex.get(oldLangKey)) {
            case (?ids) removeFromIndex(ids, updated.id);
            case null {};
          };
          let lList : List.List<Common.ProductId> = switch (langIndex.get(newLangKey)) {
            case (?l) l;
            case null {
              let fresh = List.empty<Common.ProductId>();
              langIndex.add(newLangKey, fresh);
              fresh;
            };
          };
          lList.add(updated.id);
        };

        #ok(true);
      };
    };
  };

  public func deleteProduct(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    isbnIndex : Map.Map<Text, Common.ProductId>,
    genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
    langIndex : Map.Map<Text, List.List<Common.ProductId>>,
    id : Common.ProductId,
  ) : Bool {
    switch (products.get(id)) {
      case null false;
      case (?p) {
        products.remove(id);
        isbnIndex.remove(p.isbn);
        switch (genreIndex.get(genreKey(p.genre))) {
          case (?ids) removeFromIndex(ids, id);
          case null {};
        };
        switch (langIndex.get(langKey(p.language))) {
          case (?ids) removeFromIndex(ids, id);
          case null {};
        };
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
    let deduped = existing.filter(func(pid) { pid != productId });
    let newList = List.empty<Common.ProductId>();
    newList.add(productId);
    for (pid in deduped.values()) {
      newList.add(pid);
    };
    if (newList.size() > 20) {
      newList.truncate(20);
    };
    recentlyViewed.add(userId, newList);
  };

  // ── refreshBestsellersCache — top 50 by totalRatingScore/reviewCount ──────
  public func refreshBestsellersCache(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    bestsellersCache : List.List<Common.ProductId>,
  ) {
    let all = List.empty<CatalogTypes.Product>();
    for ((_, p) in products.entries()) {
      all.add(p);
    };
    let sorted = all.sort(func(a, b) {
      let scoreA = if (a.reviewCount == 0) 0.0 else a.totalRatingScore.toFloat() / a.reviewCount.toFloat();
      let scoreB = if (b.reviewCount == 0) 0.0 else b.totalRatingScore.toFloat() / b.reviewCount.toFloat();
      // descending
      if (scoreA > scoreB) #less
      else if (scoreA < scoreB) #greater
      else #equal;
    });
    bestsellersCache.clear();
    var count = 0;
    for (p in sorted.values()) {
      if (count < 50) {
        bestsellersCache.add(p.id);
        count += 1;
      };
    };
  };

  // ── getBestsellers — return ProductView from cache ────────────────────────
  public func getBestsellers(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    bestsellersCache : List.List<Common.ProductId>,
  ) : [CatalogTypes.ProductView] {
    let views = List.empty<CatalogTypes.ProductView>();
    for (pid in bestsellersCache.values()) {
      switch (products.get(pid)) {
        case (?p) views.add(toView(p));
        case null {};
      };
    };
    views.toArray();
  };

  // ── bulkImportProducts ────────────────────────────────────────────────────
  public func bulkImportProducts(
    products : Map.Map<Common.ProductId, CatalogTypes.Product>,
    isbnIndex : Map.Map<Text, Common.ProductId>,
    genreIndex : Map.Map<Text, List.List<Common.ProductId>>,
    langIndex : Map.Map<Text, List.List<Common.ProductId>>,
    bestsellersCache : List.List<Common.ProductId>,
    nextId : [var Nat],
    batch : [CatalogTypes.CreateProductInput],
  ) : BulkImportResult {
    var inserted = 0;
    var skipped = 0;
    let errors = List.empty<(Nat, Text)>();

    var i = 0;
    for (input in batch.values()) {
      // Validate required fields
      if (input.isbn.size() == 0) {
        errors.add((i, "ISBN is required"));
        skipped += 1;
      } else if (input.priceInPaisa == 0) {
        errors.add((i, "Price must be greater than 0"));
        skipped += 1;
      } else if (input.info.titleEn.size() == 0) {
        errors.add((i, "English title is required"));
        skipped += 1;
      } else if (input.info.authorEn.size() == 0) {
        errors.add((i, "English author is required"));
        skipped += 1;
      } else if (isbnIndex.containsKey(input.isbn)) {
        // Duplicate ISBN — skip silently
        skipped += 1;
      } else {
        let now = Time.now();
        let product : CatalogTypes.Product = {
          id = nextId[0];
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
        products.add(nextId[0], product);
        indexProduct(isbnIndex, genreIndex, langIndex, product);
        nextId[0] += 1;
        inserted += 1;
      };
      i += 1;
    };

    // Refresh bestsellers cache after bulk import
    refreshBestsellersCache(products, bestsellersCache);

    {
      inserted;
      skipped;
      errors = errors.toArray();
    };
  };
};
