import { AgedItem } from "@/items";

describe("Aged Items", () => {
  it("should decrease SellIn", () => {
    const item = new AgedItem("Aged Brie", 3, 10);
    item.update();
    expect(item.sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const item = new AgedItem("Aged Brie", 0, 10);
    item.update();
    expect(item.sellIn).toEqual(-1);
  });

  it("should make Aged Items increase in Quality the older it gets", () => {
    const item = new AgedItem("Aged Brie", 1, 10);
    item.update();
    expect(item.quality).toBe(11);
  });

  it("should make Aged Items increase in Quality by 2 when past SellIn", () => {
    const item = new AgedItem("Aged Brie", 0, 10);
    item.update();
    expect(item.quality).toBe(12);
  });

  it("should make Aged Items' Quality never go above 50", () => {
    const item = new AgedItem("Aged Brie", 1, 49);
    item.update();
    expect(item.quality).toBe(50);
    item.update();
    expect(item.quality).toBe(50);
  });
});
