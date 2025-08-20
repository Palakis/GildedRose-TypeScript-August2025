import { BaseItem } from './base';

export class VipTicketItem extends BaseItem {
  public update(): void {
    if (this.sellIn > 0) {
      this.quality += this.getQualityIncrease();
    } else {
      this.quality = 0;
    }

    this.sellIn--;
  }

  protected getQualityIncrease(): number {
    if (this.sellIn <= 5) {
      return 3;
    }

    if (this.sellIn <= 10) {
      return 2;
    }

    return 1;
  }
}
