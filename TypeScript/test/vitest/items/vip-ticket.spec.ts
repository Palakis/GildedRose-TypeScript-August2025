import { VipTicketItem } from "@/items";

describe("VIP Tickets", () => {
  it("should decrease SellIn", () => {
    const item = new VipTicketItem("Aged Brie", 3, 10);
    item.update();
    expect(item.sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const item = new VipTicketItem("Aged Brie", 0, 10);
    item.update();
    expect(item.sellIn).toEqual(-1);
  });

  it("should make VIP Tickets increase in Quality by 1 when SellIn > 10", () => {
    const item = new VipTicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      11,
      10
    );
    item.update();
    expect(item.quality).toBe(11);
  });

  it("should make VIP Tickets increase in Quality by 2 when SellIn <= 10", () => {
    const item = new VipTicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      9,
      10
    );
    item.update();
    expect(item.quality).toBe(12);
  });

  it("should make VIP Tickets increase in Quality by 3 when SellIn <= 5", () => {
    const item = new VipTicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      4,
      10
    );
    item.update();
    expect(item.quality).toBe(13);
  });

  it("should make VIP Tickets Quality drop to zero after SellIn", () => {
    const item = new VipTicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      10
    );
    item.update();
    expect(item.quality).toBe(0);
  });

  it("should make sure Quality is never negative", () => {
    const item = new VipTicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      0
    );
    item.update();
    expect(item.quality).toBeGreaterThanOrEqual(0);
  });
});
