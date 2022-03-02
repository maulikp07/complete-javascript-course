'use strict';

/*function logger() {
  console.log("My name is Maulik Patel");
}

logger();

 function fruitProcessor(apples, oranges) {
  console.log(apples + " " + oranges);
  const juice = `Juice with ${apples} apples and ${oranges} ornages .`;
  return juice;
}
const fruitJuice = fruitProcessor(3, 5);
console.log(fruitJuice);
console.log(fruitProcessor(3, 4));

///////////////////////////////////////////////////////////////////
//FUNCTION DECLARATION
function calcAge(birthYear) {
  return 2021 - birthYear;
}
console.log(calcAge(1995));

///////////////////////////////////////////////////////////////////
//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1995);
console.log(age2);

/////////////////////////////////////////////////////////////////
//ARROW FUNCTION
const calcAge3 = (birthYea) => 2037 - birthYea;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetierment = (birthYea, firstName) => {
  const age = 2037 - birthYea;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetierment(1995, "Maulik"));

function cutFruuitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruuitPieces(apples);
  const orangePieces = cutFruuitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} ornages.`;
  return juice;
}

console.log(fruitProcessor(3, 4));

//Challenge
const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calAverage(85, 54, 41);
const avgKoalas = calAverage(23, 34, 27);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    return `Dolphins beats Koalas with a score of ${avgDolphins} compared to ${avgKoalas}`;
  } else {
    return `Koalas beats Dolphins with a score of ${avgKoalas} compared to ${avgDolphins}`;
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));
*/

/////////////////////////////////////////////////////////////////////
//TODO  ARRAYS
/*
const friends = ["Maulik", "Chako", "Kenil", "Tilu"];
console.log(friends);
const years = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years);
console.log(friends[2]);
console.log(friends.length);
friends[2] = "Jay";
console.log(friends);

friends.push("Kenil");
console.log(friends);

friends.unshift("Deep");
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Tilu"));
console.log(friends.indexOf("Kenil"));

console.log(friends.includes("Tilu"));
console.log(friends.includes("Kenil"));
*/

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     const tip = bill * 0.15;
//     const total = tip + bill;
//     return `Tip is ${tip} and total bill is ${total}`;
//   } else {
//   }
// }

/* function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(total);
 */
//////////////////////////////////////////////////////////////////////
//Objects
// const heading = document.querySelectorAll("h1");
// console.log(heading);
// console.dir(heading);
/*
const jonas = {
  firstName: "Maulik",
  lastName: "Patel",
  birthYear: 1995,
  job: "seeker",
  friends: ["Disha", "kenil", "chakshul"],
  hasDriversLicence: true,
  /* calcAge: function (birthYear) {
    return 2022 - birthYear;
  } */
/* calcAge: function () {
    return 2022 - this.birthYear;
  }, */
/* calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
}; */
/*
jonas.calcAge();
console.log(jonas.age);
 */
//challenge
// "Maulik has 3 friends, and his best friend is called Disha"
/* const name = prompt("Enter name");
const number = prompt(" Friend name");

console.log(
  `${jonas[name]} has ${jonas["friends"].length} and his best friend is called ${jonas["friends"][number]}`,
);
 */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    console.log(bmi);
    return bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 98,
  height: 1.95,
  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    console.log(bmi);
    return bmi;
  },
};

const markBMI = Math.floor(mark.calcBMI());
const johnBMI = Math.floor(john.calcBMI());

function compareBMI(markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    console.log(
      `${mark.fullName}'s BMI ${markBMI} is higher than ${john.fullName}'s ${johnBMI} `
    );
  } else {
    console.log(
      `${john.fullName}'s BMI ${johnBMI} is higher than ${mark.fullName}'s ${markBMI} `
    );
  }
}

compareBMI(markBMI, johnBMI);
