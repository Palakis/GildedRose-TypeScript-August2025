import { GildedRose } from "@/gilded-rose";
import { VipTicketItem } from "@/items";

describe("VIP Tickets", () => {
  it("should decrease SellIn", () => {
    const gildedRose = new GildedRose([new VipTicketItem("Aged Brie", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const gildedRose = new GildedRose([new VipTicketItem("Aged Brie", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  });

  it("should make VIP Tickets increase in Quality by 1 when SellIn > 10", () => {
    const gildedRose = new GildedRose([
      new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 11, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should make VIP Tickets increase in Quality by 2 when SellIn <= 10", () => {
    const gildedRose = new GildedRose([
      new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 9, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it("should make VIP Tickets increase in Quality by 3 when SellIn <= 5", () => {
    const gildedRose = new GildedRose([
      new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 4, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("should make VIP Tickets Quality drop to zero after SellIn", () => {
    const gildedRose = new GildedRose([
      new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should make sure Quality is never negative", () => {
    const gildedRose = new GildedRose([
      new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 0, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});
