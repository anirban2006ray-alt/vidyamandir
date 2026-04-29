import Common "common";
import Nat "mo:core/Nat";
import Order "mo:core/Order";

module {
  public type Language = { #english; #bengali; #bilingual };

  public func compareLanguage(a : Language, b : Language) : Order.Order {
    let toOrd = func(l : Language) : Nat {
      switch l {
        case (#english) 0;
        case (#bengali) 1;
        case (#bilingual) 2;
      };
    };
    Nat.compare(toOrd(a), toOrd(b));
  };

  public type Genre = {
    #fiction;
    #nonFiction;
    #academic;
    #childrens;
    #bengaliClassics;
    #poetry;
    #biography;
    #science;
    #history;
    #religion;
    #other;
  };

  public func compareGenre(a : Genre, b : Genre) : Order.Order {
    let toOrd = func(g : Genre) : Nat {
      switch g {
        case (#fiction) 0;
        case (#nonFiction) 1;
        case (#academic) 2;
        case (#childrens) 3;
        case (#bengaliClassics) 4;
        case (#poetry) 5;
        case (#biography) 6;
        case (#science) 7;
        case (#history) 8;
        case (#religion) 9;
        case (#other) 10;
      };
    };
    Nat.compare(toOrd(a), toOrd(b));
  };

  public type ProductLabel = {
    titleEn : Text;
    titleBn : Text;
    authorEn : Text;
    authorBn : Text;
    descriptionEn : Text;
    descriptionBn : Text;
  };

  public type Product = {
    id : Common.ProductId;
    info : ProductLabel;
    isbn : Text;
    genre : Genre;
    language : Language;
    publisher : Text;
    publicationDate : Common.Timestamp;
    coverImageUrl : Text;
    priceInPaisa : Nat; // INR paise (1 INR = 100 paise)
    stockCount : Nat;
    totalRatingScore : Nat;
    reviewCount : Nat;
    createdAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
  };

  // Shared API type (no var fields)
  public type ProductView = {
    id : Common.ProductId;
    info : ProductLabel;
    isbn : Text;
    genre : Genre;
    language : Language;
    publisher : Text;
    publicationDate : Common.Timestamp;
    coverImageUrl : Text;
    priceInPaisa : Nat;
    stockCount : Nat;
    averageRating : Float;
    reviewCount : Nat;
    createdAt : Common.Timestamp;
  };

  public type ProductFilter = {
    genre : ?Genre;
    language : ?Language;
    minPriceInPaisa : ?Nat;
    maxPriceInPaisa : ?Nat;
    minRating : ?Float;
    inStockOnly : Bool;
    searchQuery : ?Text; // searches title, author, isbn in both languages
  };

  public type SortField = { #price; #rating; #publicationDate; #title };
  public type SortOrder = { #asc; #desc };

  public type ProductSort = {
    field : SortField;
    order : SortOrder;
  };

  public type CreateProductInput = {
    info : ProductLabel;
    isbn : Text;
    genre : Genre;
    language : Language;
    publisher : Text;
    publicationDate : Common.Timestamp;
    coverImageUrl : Text;
    priceInPaisa : Nat;
    stockCount : Nat;
  };

  public type UpdateProductInput = {
    id : Common.ProductId;
    info : ?ProductLabel;
    isbn : ?Text;
    genre : ?Genre;
    language : ?Language;
    publisher : ?Text;
    publicationDate : ?Common.Timestamp;
    coverImageUrl : ?Text;
    priceInPaisa : ?Nat;
    stockCount : ?Nat;
  };
};
