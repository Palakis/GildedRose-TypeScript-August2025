import { BaseItem } from "./base";

export class StandardItem extends BaseItem {
  public update(): void {
    const decreaseBy = this._sellIn <= 0 ? 2 : 1;
    this._quality = Math.max(0, this._quality - decreaseBy);
    this._sellIn--;
  }
}
