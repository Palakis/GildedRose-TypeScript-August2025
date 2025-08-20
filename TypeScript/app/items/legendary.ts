import { BaseItem } from './base';

export class LegendaryItem extends BaseItem {
  public update(): void {
    // do nothing. legendary items don't lose quality
    // over time and can be sold forever
  }
}
