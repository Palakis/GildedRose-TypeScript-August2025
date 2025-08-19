import { LegendaryItem } from "@/items";

describe("Legendary Items", () => {
  it("should never make Legendaries age or decrease in Quality", () => {
    const item = new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 10);
    item.update();
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(10);
  });
});
