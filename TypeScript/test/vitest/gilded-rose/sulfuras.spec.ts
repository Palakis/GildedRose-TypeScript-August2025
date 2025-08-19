import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose - Sulfuras specifics", () => {
  it("should never make Sulfuras age or decrease in Quality", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(10);
  });
});
