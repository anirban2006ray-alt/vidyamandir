import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Common "../types/common";
import FlashSaleTypes "../types/flashsale";

module {
  public func isActive(sale : FlashSaleTypes.FlashSale, now : Common.Timestamp) : Bool {
    sale.isActive and now >= sale.startTime and now <= sale.endTime;
  };

  public func toView(
    sale : FlashSaleTypes.FlashSale,
    now : Common.Timestamp,
  ) : FlashSaleTypes.FlashSaleView {
    {
      id = sale.id;
      titleEn = sale.titleEn;
      titleBn = sale.titleBn;
      startTime = sale.startTime;
      endTime = sale.endTime;
      items = sale.items;
      isCurrentlyActive = isActive(sale, now);
      createdAt = sale.createdAt;
    };
  };

  public func listFlashSales(
    flashSales : Map.Map<Common.FlashSaleId, FlashSaleTypes.FlashSale>,
    activeOnly : Bool,
    now : Common.Timestamp,
  ) : [FlashSaleTypes.FlashSaleView] {
    let result = List.empty<FlashSaleTypes.FlashSaleView>();
    for ((_, sale) in flashSales.entries()) {
      if (not activeOnly or isActive(sale, now)) {
        result.add(toView(sale, now));
      };
    };
    result.toArray();
  };

  public func getFlashSale(
    flashSales : Map.Map<Common.FlashSaleId, FlashSaleTypes.FlashSale>,
    id : Common.FlashSaleId,
    now : Common.Timestamp,
  ) : ?FlashSaleTypes.FlashSaleView {
    switch (flashSales.get(id)) {
      case (?sale) ?toView(sale, now);
      case null null;
    };
  };

  public func createFlashSale(
    flashSales : Map.Map<Common.FlashSaleId, FlashSaleTypes.FlashSale>,
    nextId : Nat,
    input : FlashSaleTypes.CreateFlashSaleInput,
  ) : Common.FlashSaleId {
    let sale : FlashSaleTypes.FlashSale = {
      id = nextId;
      titleEn = input.titleEn;
      titleBn = input.titleBn;
      startTime = input.startTime;
      endTime = input.endTime;
      items = input.items;
      isActive = true;
      createdAt = Time.now();
    };
    flashSales.add(nextId, sale);
    nextId;
  };

  public func deactivateFlashSale(
    flashSales : Map.Map<Common.FlashSaleId, FlashSaleTypes.FlashSale>,
    id : Common.FlashSaleId,
  ) : Bool {
    switch (flashSales.get(id)) {
      case null false;
      case (?existing) {
        let updated : FlashSaleTypes.FlashSale = { existing with isActive = false };
        flashSales.add(id, updated);
        true;
      };
    };
  };
};
