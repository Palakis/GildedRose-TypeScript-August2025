import { GildedRose } from "@/gilded-rose";
import { Item } from "@/items";

describe("Gilded Rose - Backstage Passes specifics", () => {
  it("should make Backstage Passes increase in Quality by 1 when SellIn > 10", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should make Backstage Passes increase in Quality by 2 when SellIn <= 10", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it("should make Backstage Passes increase in Quality by 3 when SellIn <= 5", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("should make Backstage Passes Quality drop to zero after SellIn", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
