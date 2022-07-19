import { OrderStatus } from './interfaces/order-status';
import { Msg } from '../services/msg';
import { SaveOrder } from '../services/save-order';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Msg,
    private readonly save: SaveOrder,
    public readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty!');
      return;
    }
    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `Total order: ${this.cart.totalWithDiscount()}... Thank you for your order!`,
    );
    this.save.saveOrder();
    this.cart.clear();
    console.log(
      'Customer -> ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
