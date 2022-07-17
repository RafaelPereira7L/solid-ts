import { OrderStatus } from './interfaces/order-status';
import { Msg } from '../services/msg';
import { SaveOrder } from '../services/save-order';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Msg,
    private readonly save: SaveOrder,
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
      `Total order: ${this.cart.total()}... Thank you for your order!`,
    );
    this.save.saveOrder();
    this.cart.clear();
  }
}
