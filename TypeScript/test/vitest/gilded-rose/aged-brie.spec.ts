import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose - Aged Brie specifics", () => {
  it("should make Aged Brie increase in Quality the older it gets", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should make Aged Brie Quality never go above 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});
