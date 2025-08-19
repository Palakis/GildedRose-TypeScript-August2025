import { ItemInterface } from "@/types/item";

export abstract class BaseItem implements ItemInterface {
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

  public abstract update(): void;
}
