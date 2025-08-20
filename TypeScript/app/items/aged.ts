import { BaseItem } from './base';

export class AgedItem extends BaseItem {
  public update(): void {
    const qualityIncrease = this.sellIn <= 0 ? 2 : 1;
    this.quality += qualityIncrease;
    this.sellIn--;
  }
}
