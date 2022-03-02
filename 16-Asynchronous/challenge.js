//////////////////////////////////////
// ! Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// https://geocode.xyz/52.508,13.381?geoit=json

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with the API (${response.status})`);
//       } else {
//         return response.json();
//       }
//     })
//     .then(data => {
//       console.log(data);
//       const locality = data.localityInfo.administrative;
//       console.log(
//         `You are in ${locality[2].name} of ${locality[1].name} state of ${locality[0].name} located in ${data.continent}`
//       );
//       return fetch(`https://restcountries.com/v2/name/${locality[0].name}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with Rest Country API (${response.status})`);
//       } else {
//         return response.json();
//       }
//     })
//     .then(data => {
//       const [info] = data;
//       console.log(`Country Name from Rest Country API is ${info.name} `);
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(`Somthing Went Wrong ${err}`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// whereAmI(52.508, 13.381);
// whereAmI(-33.933, 18.474);
// whereAmI(19.037, 72.873);
// whereAmI(23.02162, 72.57971);

///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/* const images = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    console.log('Image is Loading');
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', function () {
      images.appendChild(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Image Not Found'));
    });
  });
};
let currenImage;
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currenImage = img;
    console.log('Image 1 is fetched');
    return wait(2);
  })
  .then(() => {
    currenImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currenImage = img;
    console.log('Image 2 is fetched');
    return wait(2);
  })
  .then(() => {
    currenImage.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .catch(err => console.error(err));
 */
