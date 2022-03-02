/* const country = "India";
const continent = "Asia";
const population = "130000000";
const halfPopulation = population / 2;
const finlandPopulation = 6000000;
const avgPopulation = 3300000;
console.log(country + " " + continent + " " + population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(halfPopulation + 1);
console.log(population > finlandPopulation);
console.log(population < avgPopulation);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);
 */
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

 */
/*
const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnkBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnkBMI;
console.log(markBMI);
console.log(johnkBMI);
console.log(markHigherBMI);
 */
/*
const markWeight = 95;
const johnWeight = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
}*/
/* const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value was ${
    bill + tip
  }`,
);
 */

// const btn = document.querySelector(".btn");

/* btn.addEventListener("click", function (event) {
  console.log("You pressed a button");
  console.log(event.currentTarget);
  console.log(this);
}); */

/* btn.addEventListener("click", (event) => {
  console.log("You pressed a button");
  console.log(event.currentTarget);
  console.log(this);
});
 */
/* const signUpForm = document.getElementById("submitForm");
const submit = document.getElementById("submit");
const name = document.getElementById("name");

signUpForm.addEventListener("submit", function (event) {
  const input = event.currentTarget.name.value;
  console.log(input);
  if (input.includes("Maulik")) {
    alert("Sorry Bro! Put your real name");
    event.preventDefault();
  } else {
    console.log(event);
  }
});

const bikes = ["yamaha", "hero", "honda", "dukati", "binachi"];

const newBikes = [...bikes.slice(0, 2), "suzuki", ...bikes.slice(2)];

const newBikes2 = [...bikes.slice(0, 3), ...bikes.slice(4)];

console.log(newBikes);
console.log(newBikes2);

const veggies = {
  potato: 10,
  onion: 5,
  cauliflower: 3,
};

console.log(veggies);
console.log(Object.entries(veggies));
console.log(Object.keys(veggies));
console.log(Object.values(veggies));

Object.values(veggies).forEach((qty) => {
  console.log(qty);
});
 */

/* const feedback = [
  { comment: "Love the burgs", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Smoothies are great, like the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
];

const burgRating = feedback.find((abc) => abc.comment.includes("burgs"));
console.log(burgRating);

const number = [1, 3, 100, 5, 10, 15, 7, 9, 2];
// const numbersSorted = number.sort();
const numbersSorted2 = number.sort(
  (firstItem, secondItem) => (firstItem > secondItem ? secondItem : firstItem),
  // console.log(firstItem, secondItem);
);

console.log(numbersSorted2);
// console.log(numbersSorted);
//  */
const toppings = [
  "Mushrooms",
  "Tomatoes",
  "Eggs",
  "Chili",
  "Lettuce",
  "Avocado",
  "Bacon",
  "Pickles",
  "Onions",
];

function callbackTopping(topping, index, originalArray) {
  console.log(topping, index, originalArray);
  console.log(originalArray[index + 1]);
}

toppings.forEach(callbackTopping);

const people = [
  {
    birthday: "April 22, 1993",
    names: {
      first: "Keith",
      last: "Buckley",
    },
  },
  {
    birthday: "January 3, 1975",
    names: {
      first: "Larry",
      last: "Heep",
    },
  },
  {
    birthday: "February 12, 1944",
    names: {
      first: "Linda",
      last: "Bermeer",
    },
  },
];

const cleanPeople = people.map((person) => {
  console.log(person);
  const birthday = new Date(person.birthday).getTime();
  const now = new Date();
  console.log(birthday, now);
  const age = Math.floor((now - birthday) / 31536000000);
  console.log(age);
  return {
    age: age,
    name: `${person.names.first} ${person.names.last}`,
  };
});

console.log(cleanPeople);
