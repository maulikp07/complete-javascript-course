// Importing Module
// import { addToCart, qt, totalPrice as price } from './shoppingCart.js';
// console.log(price);
// addToCart('bread', 5);
// console.log(qt);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.qt);

// import add, { addToCart, qt, totalPrice as price } from './shoppingCart.js'; //! We should ever mix default and named import
// ? ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ? ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ? Top Level Await -- Only can be used in module, it blocks execution of entire module untill it gets its results
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('End fetching');
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   //   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);
// // Not very clean
// // lastPost.then(last => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);
// ? ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ? ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ? The Module Pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totlaPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier.`);
//   };
//   return {
//     addToCart,
//     cart,
//     totlaPrice,
//     totalQuantity,
//   };
// })();
// ShoppingCart2.addToCart('pizza', 4);
// ShoppingCart2.addToCart('apples', 10);
// console.log(ShoppingCart2);
// ? CommonJS Modules
//Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
// };
// //Import
// const { addToCart } = require('./shoppingCart')
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
//Polyfilling
import 'core-js/stable';
import cloneDeep from 'lodash-es';
// Polyfilling Async Functions
import 'regenerator-runtime/runtime';
// import cloneDeep from 'lodash';
import add, { cart } from './shoppingCart.js'; // ^ Just for an Example

console.log('Importing Modules');
add('bread', 2);
add('pizza', 5);
add('apples', 10);

console.log(cart);

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const cloneState = Object.assign({}, state);
// state.user.loggedIn = false;
console.log(cloneState);

const cloneDeepState = cloneDeep(state);
state.user.loggedIn = false;
console.log('Clone Deep State: ', cloneDeepState);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Maulik');

console.log('Maulik' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));
