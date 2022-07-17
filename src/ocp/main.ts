/*
  OPEN/CLOSED PRINCIPLE
  Entidades podem estar abertas para extensão, mas fechadas para alteração.
*/

import { Msg } from './services/msg';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { SaveOrder } from './services/save-order';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const noDiscount = new NoDiscount();
const cart = new ShoppingCart(fiftyPercentDiscount);
const msg = new Msg();
const save = new SaveOrder();
const order = new Order(cart, msg, save);

cart.addItem(new Product('Smarphone', 1000));
cart.addItem(new Product('Hat', 50));
cart.addItem(new Product('T-shirt', 40));
cart.addItem(new Product('Belt', 2000));

console.log(cart.items);
console.log(cart.total());
console.log(cart.totalWithDiscount());
console.log('Order status -> ', order.orderStatus);
order.checkout();
console.log('Order status -> ', order.orderStatus);
