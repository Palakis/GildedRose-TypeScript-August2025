import { ConjuredItem } from "@/items";

describe("Conjured Items", () => {
  it("should decrease SellIn", () => {
    const item = new ConjuredItem("test", 3, 10);
    item.update();
    expect(item.sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const item = new ConjuredItem("test", 0, 10);
    item.update();
    expect(item.sellIn).toEqual(-1);
  });

  it("should decrease Quality by 2", () => {
    const item = new ConjuredItem("test", 1, 10);
    item.update();
    expect(item.quality).toEqual(8);
  });

  it("should make sure Quality is never negative", () => {
    const item = new ConjuredItem("test", 0, 0);
    item.update();
    expect(item.quality).toBeGreaterThanOrEqual(0);
  });
});
