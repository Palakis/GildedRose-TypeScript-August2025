import { Item } from "./items";

export class GildedRose {
  constructor(protected items: Array<Item> = []) {}

  updateQuality() {
    for (let item of this.items) {
      item.updateQuality();
    }

    return this.items;
  }
}
