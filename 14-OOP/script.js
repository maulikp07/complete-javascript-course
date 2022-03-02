'use strict';
/* const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // ! Never Create Methods inside constructor function Like this
  //! Because every instance will inherit this method and that can cause performance issue
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// ? What NEW Operator do: ⬇
// 1. NEW  empty object  {} is created
// 2. function is called , this keyword is set to = {}
// 3. {} linked to a prototype
// 4. function automatically retun {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('JAck', 1975);
console.log(matilda, jack);
console.log(jonas instanceof Person);

// ^ ///////////////////////////////////////////////////////////////////////////////////
// ^ ///////////////////////////////////////////////////////////////////////////////////
// ^ PROTOTYPE
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(jonas.__proto__);
console.log(Person.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

// ? Important Note: ⬇
// Person.prototype is not a Prototype of a Person itself even though we write it as Person.prototype
// but it is a Prototype of OBJECTS creted from CONSTRUCTOR function
// and that is why Person.__proto !== Person.prototype && jonas.__proto__ === Person.prototype

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// ? PROTOTYPE CHAIN
//When we call  hasOwnProperty  on jonas object it will look inside jonas object first but since we havn't defined it there it will look in its prototype i.e. Person.prototype but again we haven't defined it there either so it will look for Person.prototype's prototype i.e Object.prototype and it gets inherited from there ...

console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // NULL

console.dir(Person.prototype.constructor);

const arr = [1, 23, 4, 5, 6, 87, 8, 1, 23, 8, 9]; // new Array === []
console.log(arr.__proto__); //  Array.prototype
console.log(arr);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector('h1');

console.log(h1);
console.dir(x => x + 1);
 */

// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? ES6 CLASSES

// class expression
// const PersonCl = class {}

//class declaration
// class PersonCl {}

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// const jessica = new PersonCl('Jessica', 1995);
// console.log(jessica);
// jessica.calcAge();
// jessica.greet();
// console.log(jessica.__proto__ === PersonCl.prototype);

// ^ 1. Classes are NOT hoisted
// ^ 2. Classes are first-class citizen
// ^ 3 Classes are executed in strict mode

// ? Getters and Setters

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to .prototype property
//   // Instance Method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   // Static Method
//   static hey() {
//     console.log('Hey there 💛');
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName(name) { //Set a property that already Exist // ? Mainly Used for Validation
//     // When we try to create a setter for property name which is already exist then it takes its value as a parameter so in our case value of fullName becomes value of name
//     // So whenever we try to set fullName it will call this method
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     // _ is a JS convention not a feature
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1995);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.fullName);
// jessica.hey(); //!  Will give you an Error

// const walter = new PersonCl('Walter', 1992);
// console.log(walter);

// PersonCl.hey();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// ? Static Method -- are the methods which are not in prototype but in constructor
// Such as we can do this Array.from(document.querySelectorAll('h1'))
// but can NOT do this [1,2,3,4].from()
// Person.hey = function () {
//   console.log('Hey there 💛');
// };

// Person.hey(); // Same way we can't do this jonas.hey();

// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? //////////////////////////////////////////////////////////////////////////////////////////
// ?  Object.create
// ^ Allow us to manually set prototype of an object

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// console.log(steven);
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1998);
// console.log(sarah);
// sarah.calcAge();

// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? Inheritance Between "Classes" : Using Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// // ^ Linking Prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// Student.prototype.constructor = Student;

// const mike = new Student('Mike', 1995, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// console.dir(Student.prototype.constructor);

// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? Inheritance Between "Classes" : Using ES 6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   static hey() {
//     console.log('Hey there 💛');
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   info() {
//     console.log(
//       `Hi my name is ${this.fullName} and I've studied ${this.course}`
//     );
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2022 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }
// const maulik = new StudentCl('Maulik Patel', 1995, 'Information Technology');
// console.log(maulik);
// maulik.greet();
// maulik.calcAge();
// maulik.info();

// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? Inheritance Between "Classes" : Using Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(
//     `Hi my name is ${this.firstName} and I've studied ${this.course}`
//   );
// };
// const maulik = Object.create(StudentProto);
// maulik.init('Maulik', 2020, 'Computer science');
// maulik.introduce();
// maulik.calcAge();

// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? //////////////////////////////////////////////////////////////////////////////////////////
// ? Another Class Example : Encapsulation and many more
// ? Public fields
// ? Private fields
// ? Public methods
// ? Private methods ---- Not functional at the moment

// class Account {
//   // ^ 1. Public fields (instances)
//   locale = navigator.language;

//   // ^ 2 . Private Fields
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //protected property
//     this.#pin = pin;
//     // this._movements = [];

//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // ^ 3. Public Methods
//   // Public Interface of an Object
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//       return this;
//     }
//   }
//   // ^ 4. Private Method Not available at the moment
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);
// console.log(acc1.getMovements());

// //Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
// console.log(acc1.getMovements());
