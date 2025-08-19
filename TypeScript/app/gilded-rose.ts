import { ItemInterface } from "./types/item";

export class GildedRose {
  constructor(public items: Array<ItemInterface> = []) {}

  updateQuality() {
    for (let item of this.items) {
      item.update();
    }

    return this.items;
  }
}
