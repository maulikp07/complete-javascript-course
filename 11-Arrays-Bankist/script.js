'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// ? Simple Array Methods
// ? ///////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// ? SLICE
// ?  Does Not mutate original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(arr.slice()); // ? Makes Shallow Copy of an Array just like console.log([...arr])

// ? SPLICE
// ? Mutates original Array
// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(-1));

// ? Reverse
// ? Mutates Original Array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// ? CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// ? JOIN
// console.log(letters.join('-'));

//? ES2022 AT METHOD

// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));
// console.log('Maulik'.at(0));
// console.log('Maulik'.at(-1));
// // ? getting last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     console.log(`You Withdrawn ${Math.abs(movement)}`);
//   }
// }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You Deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} :You Withdrawn ${Math.abs(movement)}`);
//   }
// }

// ? forEach
//? ORDER OF PARAMETER :- element, index, array

// movements.forEach(function (movement) {
//   movement > 0
//     ? console.log(`You Deposited ${movement}`)
//     : console.log(`You Withdrawn ${Math.abs(movement)}`);
// });

// movements.forEach(function (movement, index, array) {
//   movement > 0
//     ? console.log(`Movement ${index + 1}: You Deposited ${movement} ${array}`)
//     : console.log(`Movement ${index + 1}: You Withdrawn ${Math.abs(movement)}`);
// });

// // ?  forEach : MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// //? ORDER OF PARAMETER :- (current value of map element, key, entire map looped over)
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // ?  forEach : SET
// // ? SET doesn't have key so it's value will be the same as ${value}

// const currenciesUnique = new Set(['USD', 'GBP', 'INR', 'USD', 'INR', 'GBP']);
// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`Unique Currencies are: ${value} : ${key}`);
//   console.log(set);
// });

// ? MAP METHOD
// const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrawn'} ${Math.abs(
//       mov
//     )} `
// );

// console.log(movementsDescriptions);

// ?  FILTER METHOD
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

// ?  REDUCE METHOD
// ? UNLIKE OTHER METHODS THIS METHOD ACCEPTS 4 ARGUMENTS : ACCUMULATOR OR PREVIOUS VALUE, CURRENT ELEMENT, INDEX, ARRAY
// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration Number ${i}: ${acc} and ${cur}`);
//   return (acc += cur);
// }, 0); // ? Initial value = 0

// console.log(balance);
// ^ Maximum Value
// console.log(movements);
// const max = movements.reduce(
//   (mov, cur) => (mov >= cur ? mov : cur),
//   movements[0]
// );
// const min = movements.reduce(
//   (mov, cur) => (mov <= cur ? mov : cur),
//   movements[0]
// );
// console.log(max);
// console.log(min);

// ? The Magic of chaining Method

// const eurToUsd = 1.1;
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(totalDepositUSD);

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(totalDepositUSD);

// ? THE FIND METHOD
// ?  Filter returns all the elements that matches the condition,
// ? while the FIND method return only first that matches the condition
// ? Filter returns new Array, while Find returns an element not an Array

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// ? SOME and EVERY METHOD
// ? SOME
// console.log(movements);
// console.log(movements.includes(-130)); // ^ Checks for Eqaulity only
// const anyDposits = movements.some(mov => mov > 0); // ^ Can add Condition
// console.log(anyDposits);

// ? EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //Seperate Callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // ? Flat and FlatMap Method
// const arr = [[1, 2, 3], [1, 2], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [1, 2], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// // const overallBalance = allMovements.reduce((acc, cur) => (acc += cur), 0);

// ? flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => (acc += cur), 0);
// console.log(overallBalance);

// ? flatMap
// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(overallBalance);

// ? SORT
// ? Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// ? Number
// console.log(movements);
// console.log(movements.sort()); //^ Does not work for numbers

// return < 0 , A, B
// return > 0 , B , A
// ^ Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;

//   if (b > a) return -1;
// });

// movements.sort((a, b) => a - b);
// console.log(movements);

// ^ Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;

//   if (b > a) return 1;
// });

// movements.sort((a, b) => b - a);
// console.log(movements);

// Some More Methods for creating and filling up Array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const x = new Array(7);
// console.log(x);
// // x.fill(5);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // ? Aray.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// let z1 = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// console.log(z1);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

/* let myArray = [
  {
    _id: '1',
    subdata: [
      {
        subid: '11',
        name: 'A',
      },
      {
        subid: '12',
        name: 'B',
      },
    ],
  },
  {
    _id: '2',
    subdata: [
      {
        subid: '12',
        name: 'B',
      },
      {
        subid: '33',
        name: 'E',
      },
    ],
  },
];

const array = myArray.map(x => x.subdata).flat(1);
console.log(array);

const isExist = (key, value, a) => {
  return a.find(item => item[key] == value);
};

let a = array.reduce((acc, curr) => {
  if (!isExist('subid', curr.subid, acc)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(a);
 */

// ? ////////////////////////////////////////////////////////////////////
// ?  Practice
// ? 4. this is a nice title -> This is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'and', 'but', 'with', 'or', 'in', 'on'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with ANOTHER example'));
