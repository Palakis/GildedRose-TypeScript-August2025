import { BaseItem } from './base';

export class ConjuredItem extends BaseItem {
  public update(): void {
    this.quality -= 2;
    this.sellIn--;
  }
}
