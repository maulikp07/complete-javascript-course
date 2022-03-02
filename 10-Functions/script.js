'use strict';
/*
const bookings = [];
const createBooking = function (
  flightName,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // * ES5
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;
  const booking = {
    flightName,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 100);
createBooking('LH123', 3);
createBooking('LH123', 5);
createBooking('LH123', undefined, 500);
 */

/* const flight = 'LM1234';
const maulik = {
  name: 'Maulik Patel',
  passport: 'M123456',
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 'M123456') {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
  console.log(
    passenger.name +
      ' has checked in with passport number ' +
      passenger.passport +
      'for flight number ' +
      flightNum
  );
};
checkIn(flight, maulik);
console.log(flight);
console.log(maulik);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(maulik);
checkIn(flight, maulik);
 */

/* const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}; */
// * HIGHER ORDER FUNCTION
/* const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// * JS uses callbacks all the time
const high5 = function () {
  console.log('❤');
};
document.body.addEventListener('click', high5);

['Maulik', 'Martha', 'Adam'].forEach(high5);
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
 */

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Maulik');
// greeterHey('Jonas');

// greet('Hello')('Disha');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Maulik Patel');
// lufthansa.book(536, 'Disha Patel');
// console.log(lufthansa.bookings);
// const eurowings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// *  Does Not Work
//book(123, 'Maulik Patel');

//* CALL METHOD
// book.call(eurowings, 123, 'Naresh Patel');
// console.log(eurowings.bookings);
// book.call(lufthansa, 155, 'Jonas Patel');
// console.log(lufthansa.bookings);
// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'SW',
//   bookings: [],
// };
// book.call(swiss, 788, 'Monty Patel');
// console.log(swiss.bookings);

// * APPLY METHOD // Main difference between CALL and APPLY method is APPLY doesn't take arguments after this keyword rather it takes an array as argument ... APPLY method is not being used any more
// const flightData = [345, 'Drashti Patel'];
// book.apply(swiss, flightData);
// console.log(swiss.bookings);

// book.call(swiss, ...flightData); // * Modern way to use call method
// console.log(swiss.bookings);

// * BIND METHOD // Bind does not immidiately call the function instead it returns a new function where the this keyword is bound, so it is set to whatever value we pass
// * The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.
// book.call(eurowings, 123, 'Naresh Patel');
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);
// bookEW(23, 'Maulik Patel');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Maulik Patel');
// bookEW23('Jonas Schmedtman');
// bookEW23('Martha Copper');
// console.log(eurowings.bookings);

// ? ************ BIND METHOD WITH EVENT LISTENER ****************************

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// ? PARTIAL APPLICATION means we can PRESET parameters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addTax = rate => value => console.log('', value + value * rate);

// addTax(0.23)(100);

// ? IMMIDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();
// (function () {
//   console.log('this will never run again');
// })();

// (() => {
//   console.log('this will also never run again');;ijrduuuu
// })();

// ? ////////////////////////////////////////////////////
// ? Clousers

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`New PassengerCount: ${passengerCount}`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

// * EXAMPLE 1
// let f;
// const g = function () {
//   let a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// //* Re-assigned F Function
// h();
// f();
// console.dir(f);
// g();
// f();

// * EXAMPLE 2
// const boardPassenger = function (n, wait) {
//   const perGrp = n / 3;

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, wach with ${perGrp} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGrp = 1000; // * Closer has priority over scope chain VE
// boardPassenger(180, 3);
