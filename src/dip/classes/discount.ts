export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class FortyPercentDiscount extends Discount {
  protected readonly discount = 0.4;
}

export class NoDiscount extends Discount {}
