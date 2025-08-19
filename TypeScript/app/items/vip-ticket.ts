import { BaseItem } from "./base";

export class VipTicketItem extends BaseItem {
  public update(): void {
    if (this._sellIn > 0) {
      this._quality = Math.min(50, this._quality + this.getQualityIncrease());
    } else {
      this._quality = 0;
    }

    this._sellIn--;
  }

  protected getQualityIncrease(): number {
    if (this._sellIn <= 5) {
      return 3;
    }

    if (this._sellIn <= 10) {
      return 2;
    }

    return 1;
  }
}
