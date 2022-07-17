type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty!');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(
      `Total order: ${this.total()}... Thank you for your order!`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Msg has been sent -> ', message);
  }

  saveOrder(): void {
    console.log('Order has been saved!');
  }

  clear(): void {
    console.log('Cart has been cleared!');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ name: 'Smarphone', price: 1000 });
cart.addItem({ name: 'Hat', price: 50 });
cart.addItem({ name: 'T-shirt', price: 40 });
cart.addItem({ name: 'Belt', price: 2000 });

console.log(cart.items);
console.log(cart.total());
console.log('Order status -> ', cart.orderStatus);
cart.checkout();
console.log('Order status -> ', cart.orderStatus);
