'use strict';

const maulik = {
  firstName: 'Maulik',
  lastName: 'Patel',
  age: 25,
  place: {
    live: 'ahmedabad',
  },
};
// to make a shallow copy of an OBJECT
const maulikCopy = Object.assign({}, maulik);

//to make a deep copy of an OBJECT
const maulikSecondCopy = JSON.parse(JSON.stringify(maulik));

maulikCopy.firstName = 'Montu';
maulikCopy.place.live = 'Sydney';

maulikSecondCopy.firstName = 'Mitul';
maulikSecondCopy.place.live = 'Toronto';

console.log('Maulik ', maulik);
console.log('Maulik Copy', maulikCopy);
console.log('Maulik Second Copy', maulikSecondCopy);
