import { BaseItem } from './base';

export class StandardItem extends BaseItem {
  public update(): void {
    const qualityDecrease = this.sellIn <= 0 ? 2 : 1;
    this.quality -= qualityDecrease;
    this.sellIn--;
  }
}
