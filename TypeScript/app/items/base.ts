export class Item {
  constructor(
    protected _name: string,
    protected _sellIn: number,
    protected _quality: number
  ) {}

  public get name(): string {
    return this._name;
  }

  public get sellIn(): number {
    return this._sellIn;
  }

  public get quality(): number {
    return this._quality;
  }

  public updateQuality(): void {
    if (
      this._name != "Aged Brie" &&
      this._name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (this._quality > 0) {
        if (this._name != "Sulfuras, Hand of Ragnaros") {
          this._quality = this._quality - 1;
        }
      }
    } else {
      if (this._quality < 50) {
        this._quality = this._quality + 1;
        if (this._name == "Backstage passes to a TAFKAL80ETC concert") {
          if (this._sellIn < 11) {
            if (this._quality < 50) {
              this._quality = this._quality + 1;
            }
          }
          if (this._sellIn < 6) {
            if (this._quality < 50) {
              this._quality = this._quality + 1;
            }
          }
        }
      }
    }
    if (this._name != "Sulfuras, Hand of Ragnaros") {
      this._sellIn = this._sellIn - 1;
    }
    if (this.sellIn < 0) {
      if (this._name != "Aged Brie") {
        if (this._name != "Backstage passes to a TAFKAL80ETC concert") {
          if (this._quality > 0) {
            if (this._name != "Sulfuras, Hand of Ragnaros") {
              this._quality = this._quality - 1;
            }
          }
        } else {
          this._quality = this._quality - this._quality;
        }
      } else {
        if (this._quality < 50) {
          this._quality = this._quality + 1;
        }
      }
    }
  }
}
