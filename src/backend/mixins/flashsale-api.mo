import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import FlashSaleTypes "../types/flashsale";
import FlashSaleLib "../lib/flashsale";

mixin (
  accessControlState : AccessControl.AccessControlState,
  flashSales : Map.Map<Common.FlashSaleId, FlashSaleTypes.FlashSale>,
  nextFlashSaleId : [var Nat],
) {
  public query func listFlashSales(activeOnly : Bool) : async [FlashSaleTypes.FlashSaleView] {
    FlashSaleLib.listFlashSales(flashSales, activeOnly, Time.now());
  };

  public query func getFlashSale(id : Common.FlashSaleId) : async ?FlashSaleTypes.FlashSaleView {
    FlashSaleLib.getFlashSale(flashSales, id, Time.now());
  };

  // Admin operations
  public shared ({ caller }) func createFlashSale(input : FlashSaleTypes.CreateFlashSaleInput) : async Common.FlashSaleId {
    AccessControl.initialize(accessControlState, caller);
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admins only");
    };
    let id = FlashSaleLib.createFlashSale(flashSales, nextFlashSaleId[0], input);
    nextFlashSaleId[0] += 1;
    id;
  };

  public shared ({ caller }) func deactivateFlashSale(id : Common.FlashSaleId) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admins only");
    };
    FlashSaleLib.deactivateFlashSale(flashSales, id);
  };
};
