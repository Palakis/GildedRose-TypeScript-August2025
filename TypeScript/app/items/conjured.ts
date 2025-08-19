import { BaseItem } from "./base";

export class ConjuredItem extends BaseItem {
  public update(): void {
    this._quality = Math.max(0, this._quality - 2);
    this._sellIn--;
  }
}
