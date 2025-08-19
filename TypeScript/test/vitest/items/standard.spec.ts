import { GildedRose } from "@/gilded-rose";
import { StandardItem } from "@/items";

describe("Standard Items", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new StandardItem("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decrease SellIn", () => {
    const gildedRose = new GildedRose([new StandardItem("test", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const gildedRose = new GildedRose([new StandardItem("test", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  });

  it("should decrease Quality by 1 before SellIn", () => {
    const gildedRose = new GildedRose([new StandardItem("test", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it("should decrease Quality by 2 on SellIn", () => {
    const gildedRose = new GildedRose([new StandardItem("test", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("should decrease Quality by 2 after SellIn", () => {
    const gildedRose = new GildedRose([new StandardItem("test", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("should make sure Quality is never negative", () => {
    const gildedRose = new GildedRose([new StandardItem("fragile", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});
