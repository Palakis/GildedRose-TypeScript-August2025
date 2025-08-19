import { GildedRose } from "@/gilded-rose";
import { StandardItem } from "@/items";

describe("Guilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new StandardItem("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
