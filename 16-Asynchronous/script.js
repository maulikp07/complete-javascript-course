'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// ! https://restcountries.com/v2/
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const html = ` <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('portugal');
getCountryData('usa');
getCountryData('australia');
getCountryData('canada');
 */
const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*const getCountryDataAndNeighbour = function (country) {
  // ? AJAX CALL COUNTRY 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // ? GET NEIGHBOUR COUNTRY
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //? AJAX CALL COUNTRY 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
}; */
// getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('usa');
// ? callback hell
/* setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

 */

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
*/
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

/* const getCountryData = function (country) {
  // ? country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country Not Found (${response.status})`);
      }
      return response.json();
      // err => alert(err)
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      const neighbour = 'dsadasd';

      if (!neighbour) return;

      //? Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(
      response => {
        if (!response.ok) {
          throw new Error(`Country Not Found (${response.status})`);
        }
        return response.json();
      }
      // err => alert(err)
    )
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
// getCountryData('dfjklbasd');
// getCountryData('austria');
 */

const getJSON = function (url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

/*const getCountryData = function (country) {
  // ? country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
    .then(data => {
      console.log(data);
      console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error('No Neighbour Found!');
      //? Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
  // getCountryData('australia');
});
// getCountryData('dfjklbasd');
 */

// ? EVENT LOOP IN PRACTICE

/* console.log('TEST START');
setTimeout(() => {
  console.log('O sec timer');
}, 0);

Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test End');
 */

// ?  BUILD SIMPLE PROMISE

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💥');
//     } else {
//       reject(new Error('You Lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// ? Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log('1 seconds passed');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(4);
//   })
//   .then(() => console.log('4 seconds passed'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('def')).catch(x => console.error(x));

// ?  Promisifying the Geolocation API

// console.log('Getting Position');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
//     .then(pos => {
//       console.log(pos);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       whereAmI(lat, lng);
//     })
//     .catch(err => console.log(err));
// };

// getPosition()
//   .then(pos => {
//     console.log(pos);
//     whereAmI(pos.coords.latitude, pos.coords.longitude);
//   })
//   .catch(err => console.log(err));

// btn.addEventListener('click', getPosition);

// ? Consuming Promise with Async Await Function

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
//   try {
//     //^ Reverse Geo coding
//     const pos = await getPosition();
//     // console.log('Reverse Geo Coding data is fetched');
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     // console.log(dataGeo);

//     // ^ Country Data
//     // console.log('Country Data is fetched');
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.countryName}`
//     );
//     if (!res.ok) throw new Error('Problem getting Country');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.countryName}`;
//   } catch (err) {
//     // console.error(err);
//     renderError(`Something went wrong ${err.message}`);

//     /// REject promise returned from async function
//     throw err;
//   }
// };
// console.log('1 : Will get location');

// const country = whereAmI();
// console.log(country);

// whereAmI()
//   .then(country => console.log(`2 : ${country}`))
//   .catch(err => console.error(`2 : ${err.message}`))
//   .finally(() => console.log('3 : Finished getting location'));

/* (async function () {
  try {
    const country = await whereAmI();
    console.log(`2 : ${country}`);
  } catch (err) {
    console.error(`2 : ${err.message}`);
  } finally {
    console.log('3: Finished getting location');
  }
})();
 */

// ? Running Promises in Parallel

/* const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (error) {
    console.log(error);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
 */

// ? Promise race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

/* const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, s * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
 */

//? Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Failure'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// ? Promise.any

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Failure'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
