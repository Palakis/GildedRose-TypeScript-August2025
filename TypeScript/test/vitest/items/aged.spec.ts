import { GildedRose } from "@/gilded-rose";
import { AgedItem } from "@/items";

describe("Aged Items", () => {
  it("should decrease SellIn", () => {
    const gildedRose = new GildedRose([new AgedItem("Aged Brie", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const gildedRose = new GildedRose([new AgedItem("Aged Brie", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  });

  it("should make Aged Items increase in Quality the older it gets", () => {
    const gildedRose = new GildedRose([new AgedItem("Aged Brie", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should make Aged Items increase in Quality by 2 when past SellIn", () => {
    const gildedRose = new GildedRose([new AgedItem("Aged Brie", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it("should make Aged Items' Quality never go above 50", () => {
    const gildedRose = new GildedRose([new AgedItem("Aged Brie", 1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});
