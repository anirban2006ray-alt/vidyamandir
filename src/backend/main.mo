import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Stripe "mo:caffeineai-stripe/stripe";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import Common "types/common";
import CatalogTypes "types/catalog";
import FlashSaleTypes "types/flashsale";
import CartTypes "types/cart";
import ReviewTypes "types/review";
import OrderTypes "types/order";
import UserTypes "types/user";
import CatalogMixin "mixins/catalog-api";
import FlashSaleMixin "mixins/flashsale-api";
import CartMixin "mixins/cart-api";
import ReviewMixin "mixins/review-api";
import OrderMixin "mixins/order-api";
import UserMixin "mixins/user-api";



actor {
  // --- Authorization ---
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // --- Catalog state ---
  let products = Map.empty<Common.ProductId, CatalogTypes.Product>();
  let recentlyViewed = Map.empty<Common.UserId, List.List<Common.ProductId>>();
  let nextProductId : [var Nat] = [var 1];
  include CatalogMixin(accessControlState, products, recentlyViewed, nextProductId);

  // --- Flash sale state ---
  let flashSales = Map.empty<Common.FlashSaleId, FlashSaleTypes.FlashSale>();
  let nextFlashSaleId : [var Nat] = [var 1];
  include FlashSaleMixin(accessControlState, flashSales, nextFlashSaleId);

  // --- Cart & Wishlist state (products injected for stock + existence checks) ---
  let carts = Map.empty<Common.UserId, List.List<CartTypes.CartItem>>();
  let wishlists = Map.empty<Common.UserId, List.List<Common.ProductId>>();
  include CartMixin(products, carts, wishlists);

  // --- Reviews, Q&A state ---
  let reviews = Map.empty<Common.ReviewId, ReviewTypes.ReviewInternal>();
  let questions = Map.empty<Common.QuestionId, ReviewTypes.Question>();
  let answers = Map.empty<Common.AnswerId, ReviewTypes.AnswerInternal>();
  let purchasedProductsByUser = Map.empty<Common.UserId, Set.Set<Common.ProductId>>();
  let nextReviewId : [var Nat] = [var 1];
  let nextQuestionId : [var Nat] = [var 1];
  let nextAnswerId : [var Nat] = [var 1];
  include ReviewMixin(accessControlState, reviews, questions, answers, purchasedProductsByUser, nextReviewId, nextQuestionId, nextAnswerId);

  // --- Orders & Addresses state (products injected for inventory validation) ---
  let orders = Map.empty<Common.OrderId, OrderTypes.Order>();
  let addresses = Map.empty<Common.UserId, List.List<OrderTypes.Address>>();
  let promoCodes = Map.empty<Text, OrderTypes.PromoCode>();
  let nextOrderId : [var Nat] = [var 1];
  let nextAddressId : [var Nat] = [var 1];
  let nextPromoCodeId : [var Nat] = [var 1];
  include OrderMixin(accessControlState, orders, addresses, promoCodes, products, purchasedProductsByUser, nextOrderId, nextAddressId, nextPromoCodeId);

  // --- User profiles state ---
  let profiles = Map.empty<Common.UserId, UserTypes.UserProfile>();
  include UserMixin(accessControlState, profiles, orders, products);

  // --- Stripe payment integration ---
  var stripeConfiguration : ?Stripe.StripeConfiguration = null;

  public query func isStripeConfigured() : async Bool {
    stripeConfiguration != null;
  };

  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can configure Stripe");
    };
    stripeConfiguration := ?config;
  };

  public func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    let config = switch (stripeConfiguration) {
      case null { Runtime.trap("Stripe not configured") };
      case (?c) { c };
    };
    await Stripe.getSessionStatus(config, sessionId, transform);
  };

  public shared ({ caller }) func createCheckoutSession(
    items : [Stripe.ShoppingItem],
    successUrl : Text,
    cancelUrl : Text,
  ) : async Text {
    let config = switch (stripeConfiguration) {
      case null { Runtime.trap("Stripe not configured") };
      case (?c) { c };
    };
    await Stripe.createCheckoutSession(config, caller, items, successUrl, cancelUrl, transform);
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };
};
