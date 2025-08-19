import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose - General behaviour", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decrease SellIn on standard items", () => {
    const gildedRose = new GildedRose([new Item("test", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
  });

  it("should make SellIn go negative on standard items", () => {
    const gildedRose = new GildedRose([new Item("test", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  });

  it("should decrease Quality by 1 for standard items before SellIn", () => {
    const gildedRose = new GildedRose([new Item("test", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it("should decrease Quality by 2 on standard items on SellIn", () => {
    const gildedRose = new GildedRose([new Item("test", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("should decrease Quality by 2 for standard items after SellIn", () => {
    const gildedRose = new GildedRose([new Item("test", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("should make sure Quality is never negative", () => {
    const gildedRose = new GildedRose([new Item("fragile", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});
