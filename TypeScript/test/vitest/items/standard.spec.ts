import { StandardItem } from "@/items";

describe("Standard Items", () => {
  it("should decrease SellIn", () => {
    const item = new StandardItem("test", 3, 10);
    item.update();
    expect(item.sellIn).toEqual(2);
  });

  it("should make SellIn go negative", () => {
    const item = new StandardItem("test", 0, 10);
    item.update();
    expect(item.sellIn).toEqual(-1);
  });

  it("should decrease Quality by 1 before SellIn", () => {
    const item = new StandardItem("test", 1, 10);
    item.update();
    expect(item.quality).toEqual(9);
  });

  it("should decrease Quality by 2 on SellIn", () => {
    const item = new StandardItem("test", 0, 10);
    item.update();
    expect(item.quality).toEqual(8);
  });

  it("should decrease Quality by 2 after SellIn", () => {
    const item = new StandardItem("test", -1, 10);
    item.update();
    expect(item.quality).toEqual(8);
  });

  it("should make sure Quality is never negative", () => {
    const item = new StandardItem("fragile", 0, 0);
    item.update();
    expect(item.quality).toBeGreaterThanOrEqual(0);
  });
});
