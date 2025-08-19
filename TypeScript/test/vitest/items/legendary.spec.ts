import { GildedRose } from "@/gilded-rose";
import { LegendaryItem } from "@/items";

describe("Legendary Items", () => {
  it("should never make Legendaries age or decrease in Quality", () => {
    const gildedRose = new GildedRose([
      new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(10);
  });
});
