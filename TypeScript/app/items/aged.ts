import { BaseItem } from "./base";

export class AgedItem extends BaseItem {
  public update(): void {
    const increaseBy = this._sellIn <= 0 ? 2 : 1;
    this._quality = Math.min(50, this._quality + increaseBy);
    this._sellIn--;
  }
}
