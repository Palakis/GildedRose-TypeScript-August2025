import { GildedRose } from "@/gilded-rose";
import { StandardItem } from "@/items";

describe("Guilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new StandardItem("foo", 0, 0)]);
    const items = gildedRose.updateItems();
    expect(items[0].name).toBe("foo");
  });
});
