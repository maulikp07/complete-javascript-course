'use strict';

// Data needed for first part of the section

const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // * ES 6 ENHANCED OBJECT LITERALS,
  openingHours,
  /* openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }, */

  // * ES 6 ENHANCED OBJECT LITERALS,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  /* order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  }, */
};

// ? ////////////////////////////////////////////////////
// ? Destructuring AN ARRAY

//  const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// const [x, y, z] = arr;
// console.log(x, y, z);

//  let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// * Switching Variables Values using TEMP variable
//  const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// * Switching Variable Values using Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// * NESTED DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// * DEFAULT VALUES
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// ? ////////////////////////////////////////////////////
// ? DESCTRUCTURING OBJECTS

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// * RENAME VARIABLES USING DESTRUCTURING OBJECTS
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// * SETTING UP DEFAULT VALUE
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// * MUTATING VARIABLES
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// * nested OBJECTS
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(open, close);
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Kimmorley street',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Pancharahi Apartment',
// });

// ? ////////////////////////////////////////////////////
// ? SPREAD OPERATOR

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// COPY Array
// const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// ! ITERABLES : are ARRAYS, STRINGS, MAPS, SETS but NOT OBJECTS

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// * REAL WORLD EXAMPLE
// const ingeridents = [
//   prompt("Let's make pasta! Ingerident 1?"),
//   prompt('Ingredient 2? '),
//   prompt('Ingredient 3? '),
// ];
// console.log(ingeridents);
// restaurant.orderPasta(...ingeridents);

// * OBJECTS
// const newRestaurant = { ...restaurant, founder: 'Maulik Patel', foundIn: 1995 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante India';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// ? ////////////////////////////////////////////////////
// ? REST PATTERN AND PARAMETERS

// ! SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// ! REST, because on LEFT side of =
// * 1. DESTRUCTURE
// const [a, b, ...others] = [1, 2, 3, 4];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// REST  in OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// * 2. Function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 4, 5);
// add(2, 3, 4, 5, 6, 7, 8);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// ? ////////////////////////////////////////////////////
// ? SHORT CIRCUIT (&& & ||)

// console.log('----------OR------------');
// * USE ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Maulik');
// console.log('' || 'Maulik');
// console.log(true || 'Maulik');
// console.log(undefined || null);
// console.log(undefined || 0);
// console.log(undefined || 0 || '' || 'HELLO' || 23 || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('----------AND------------');
// console.log(0 && 'Maulik');
// console.log(7 && 'Maulik');

// ? ////////////////////////////////////////////////////
// ? THE NULISH COALESCING OPERATOR (??)

// const guest = restaurant.numGuests || 10;
// console.log(guest);

// * Nullish VALUES ARE: NULL AND UNDEFINED (NOT 0 OR '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// ? ////////////////////////////////////////////////////
// ? LOGICAL ASSIGNMENT OPERATOR

// const rest1 = {
//   name: 'Maulik',
//   // numGuest: 20,
//   numGuest: 0,
// };
// const rest2 = {
//   name: 'abc',
//   owner: 'Disha Patel',
// };

//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;
// * OR ASSIGNMENT OPERATOR
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;
// * NULLISH ASSIGNMENT OPERATOR
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
// * AND ASSIGNMENT OPERATOR
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// ? ////////////////////////////////////////////////////
// ? LOOPING ARRAYS: THE FOR-OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el} `);
// }

// ? ////////////////////////////////////////////////////
// ? OPTIONAL CHAINING

/* if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
 * WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

 * METHODS

console.log(restaurant.order?.(0, 1) ?? 'Method does not Exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not Exist');

 * ARRAYS
const users = [
  {
    name: 'Maulik',
    email: 'maulikpatelldce@gmail.com',
  },
];
console.log(users[0]?.name ?? 'USER ARRAY EMPTY');
 */

// ? ////////////////////////////////////////////////////
// ? LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES

// * OBJECT KEYS
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += ` ${day} `;
// }

// * OBJECT VALUES
// console.log(openStr);
// const values = Object.values(openingHours);
// console.log(values);

// * OBJECT ENTRIES
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

// ? ////////////////////////////////////////////////////
// ? SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Rissoto',
//   'Pizza',
//   'Pasta',
// ]);
// console.log(ordersSet);
// console.log(new Set('Maulik'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Gralic Bread');
// ordersSet.add('Gralic Bread');
// console.log(ordersSet);
// ordersSet.delete('Gralic Bread');
// ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// * EXAMPLE
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef'];
// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef']).size
// );

// ? ////////////////////////////////////////////////////
// ? MAPS

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'We are Closed :(');
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);
// const arr1 = [1, 2];
// rest.set(arr1, 'Test');
// console.log(rest.get(arr1));
// console.log(rest);
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// const question = new Map([
//   ['question', 'what is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'JAVA'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'TRY AGAIN'],
// ]);
// console.log(question);

// * CONVERT AN OBJECT TO A MAP: OBJECTS ARE NOT ITERABLES, MAPS ARE
// console.log(openingHours);
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// console.log(question.get('questioin'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer: '));
// console.log(answer);
// console.log(question.get(answer === 3));

// * CONVERT MAP TO AN ARRAY

// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

/*
//////////////////////////// @ WHEN TO USE EACH DATA STRUCTURE //////////////////////////////////////////
/// * 4 MAIN BUILT IN DATA STRUCTURE
/// * 1. ARRAYS
/// * 2. SETS
/// * 3. OBJECTS
/// * 4. MAPS

/// * NON IMPORTANT DATA STRUCTURE ARE WEAKSETS AND WEAKMAPS
/// * NON BUILT IN DATA STRUCTURE ARE : STACKS, LINKED LISTS, QUEUES, TREES AND HASH TABLES

/// * ARRAYS VS. SETS
// ^ ARRAYS :- USE WHEN YOU NEED ORDERED LIST OF VALUES (MIGHT CONTAIN DUBLICATES), USE WHEN YOU NEED TO MANIPULATE DATA
// ^ SETS :- USE WHEN YOU NEED TO WORK WITH UNIQUE VALUES, USE WHEN HIGH PERFORMANCE IS REALLY IMPORTANT, USE TO REMOVE DUPLICATES FROM ARRAYS
// * OBJECTS VS. MAPS
// ^ Objects :- More 'traditional' key/value store("abused" objects), easier to write and access value with .  and []
// ^            USE WHEN YOU NEED TO INCLUDE FUNCTIONS(METHODS)
// ^            USE WHEN WORKING WITH JSON(CAN CONVERT TO MAP)
// ^ MAPS: - BETTER PERFORMANCE, KEYS CAN HAVE ANY DATA TYPE, EASY TO ITERATE, EASY TO COMPUTE SIZE
// ^            uSE WHEN YOU SIMPLEY NEED TO MAP KEY TO VALUES
// ^            USE WHEN YOU NEED KEEYS THAT ARE NOT STRINGS
*/

// ? ////////////////////////////////////////////////////
// ? STRINGS

// const airline = 'Air India';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log(airline.indexOf('i'));
// console.log(airline.lastIndexOf('i'));
// console.log(airline.indexOf('India'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

// const checkMiddleSeat = seat =>
//   seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
//     ? console.log(`${seat} is Middle Seat`)
//     : console.log(`${seat} is not a middle seat`);

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// checkMiddleSeat('32A');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//* FIx CAPITALIZATION IN PASSENGER NAME
// const passenger = 'mAuLiK';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// * Comparing email

// const email = 'hello@maulik.io';
// const loginEmail = 'Hello@Maulik.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalisedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalisedEmail);

//* Replacing

// const priceGB = '288.93$';
// const priceUS = priceGB.replace('$', 'Rs').replace('.', ',');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23.';
// console.log(announcement.replace(/door/g, 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// * BOOLEAN

// const plane1 = 'A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('Air'));

// * PRACTICE EXERCISE

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed to board on flight');
//   } else {
//     console.log('You can board the flight');
//   }
// };
// checkBaggage('I have a laptop, some foof and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection');

// // console.log('a+very+nice+string'.split('+'));
// // console.log('Maulik Patel'.split(' '));
// // const [firstName, lastName] = 'Maulik Patel'.split(' ');
// // console.log(firstName, lastName);
// // const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' ');
// // console.log(newName);

// // const capitalizeName = function (name) {
// //   const splitName = name.split(' ');
// //   const namesUpper = [];
// //   for (const n of splitName) {
// //     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
// //     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
// //   }
// //   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica and smith davis');
// capitalizeName('maulik patel');

//  * Padding
// const message = 'Go To gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log(message.padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(423123454));
// console.log(maskCreditCard(4231234546134854));
// console.log(maskCreditCard(423123454613485555));

// * REPEAT

// const message2 = 'Bad Weather ... All Departures Delayed... ';
// console.log(message2.repeat(5));
// const planesInLine = function (n) {
//   console.log(`there are ${n} planes in line ${'❤'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(10);

// * STRING METHODS PRACTICE
// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const splitText = flights.split('+');
const getCode = str => str.slice(0, 3).toUpperCase();
for (const n of splitText) {
  let [type, from, to, time] = n.split(';');

  const output = `${type.startsWith('_Delayed') ? '🛑' : ''} ${type
    .replaceAll('_', '')
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);
  console.log(output);
}
 */
