import { Msg } from './services/msg';
import { Order } from './entities/order';
import { Product } from './entities/product';
import { SaveOrder } from './services/save-order';
import { ShoppingCart } from './entities/shopping-cart';

const cart = new ShoppingCart();
const msg = new Msg();
const save = new SaveOrder();
const order = new Order(cart, msg, save);

cart.addItem(new Product('Smarphone', 1000));
cart.addItem(new Product('Hat', 50));
cart.addItem(new Product('T-shirt', 40));
cart.addItem(new Product('Belt', 2000));

console.log(cart.items);
console.log(cart.total());
console.log('Order status -> ', order.orderStatus);
order.checkout();
console.log('Order status -> ', order.orderStatus);
