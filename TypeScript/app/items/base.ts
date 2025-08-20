import { ItemInterface } from "@/types/item";

export abstract class BaseItem implements ItemInterface {
  constructor(
    private _name: string,
    private _sellIn: number,
    private _quality: number
  ) {}

  public get name(): string {
    return this._name;
  }

  public get sellIn(): number {
    return this._sellIn;
  }

  protected set sellIn(value: number) {
    this._sellIn = value;
  }

  public get quality(): number {
    return this._quality;
  }

  protected set quality(value: number) {
    this._quality = Math.max(0, Math.min(value, 50));
  }

  public abstract update(): void;
}
