// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// //creating ajax call

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbourData = function (country) {
  //AJAX Call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)[0]; //to convert in object
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    //here we have nested callbacks
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbourData('usa');
getCountryData('portugal');
getCountryData('germany');
getCountryData('india');

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // const request = fetch(`https://restcountries.com/v2/name/india`);
// // console.log(request);

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   //   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'something went wrong') {
//   return fetch(url).then(response => {
//     // console.log(response);

//     if (!response.ok) throw new Error(`country not found ${response.status}`);
//     return response.json();
//   });
// };

// // const getCountryData = function (country) {
// //   //country 1
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok) throw new Error(`country not found ${response.status}`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       //   const neighbour = data[0].borders?.[0];
// //       const neighbour = 'djdjf';

// //       if (!neighbour) return;

// //       //country 2
// //       //always return a promide then fulfil it
// //       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// //     })

// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(err);
// //       renderError(`sometjing went wrong ${err.message} try again`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // const getCountryData = function (country) {
// //   //country 1
// //   getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
// //     .then(data => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders?.[0];
// //       // const neighbour = 'djdjf';
// //       if (!neighbour) throw new Error('no neighbour found');

// //       //country 2
// //       //always return a promide then fulfil it
// //       return getJSON(
// //         `https://restcountries.com/v2/alpha/${neighbour}`,
// //         'country not found'
// //       );
// //     })

// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(err);
// // renderError(`sometjing went wrong ${err.message} try again`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // //handling rejected promises
// // btn.addEventListener('click', function () {
// //   getCountryData('portugal');
// // });

// // getCountryData('australia');

// ////////////////
// //the event loop
// // console.log('test start');
// // setTimeout(() => console.log('0 sec timer'), 0); //callback queue
// // Promise.resolve('Resolved promised 1').then(res => console.log(res)); //put in microtask priority queue so runs first

// // Promise.resolve('resolved promises 2').then(res => {
// //   for (let i = 0; i < 100000000; i++) {}
// //   console.log(res);
// // });

// // //eventually it finished, 8:06 but you see, that now only after all this work, 8:10 the zero second timer message appeared on the screen. 8:14 And so this is actual proof that these zero seconds 8:18 that we have here are not a guarantee.

// // console.log('test end');

// ////////////////////
// ////building a promise

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log('lottery draw is happening');
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve('You won the jackpot!'); //fulfilled promise
// //     } else {
// //       reject(new Error('Sorry, you lost')); //rejected promise
// //     }
// //   }, 2000);
// // });

// // //consuming promises
// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // //promisifying means to convert the to convert callback based asynchronous behavior to promise based.

// // //promisifying setTimeout
// // const wait = function (seconds) {
// //   return new Promise(resolve => {
// //     setTimeout(resolve, seconds * 1000);
// //   });
// // };

// // //wait for 3 sec
// // wait(3)
// //   .then(() => {
// //     console.log('done waiting for 1 sec');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('done waiting for 2 sec');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('done waiting for 3 sec');
// //     return wait(1);
// //   })
// //   .then(() => console.log('i waited for 4 sec'));

// // Promise.resolve('abc').then(x => console.log(x)); //static method on promise constructor

// // Promise.reject(new Error('problem')).catch(x => console.error(x)); //static method on promise constructor

// //Promisifying the Geolocation API

// // const getPosition = function () {
// //   return new Promise((resolve, reject) => {
// //     // navigator.geolocation.getCurrentPosition(
// //     //   position => resolve(position),
// //     //   err => reject(err)
// //     // );
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };

// // getPosition().then(pos => console.log(pos)); //callback func

// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     // navigator.geolocation.getCurrentPosition(
// //     //   position => resolve(position),
// //     //   err => reject(err)
// //     // );
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };
// // getPosition().then(pos => console.log(pos));

// // const whereAmI = function () {
// //   getPosition()
// //     .then(pos => {
// //       const { latitude: lat, longitude: lng } = pos.coords;

// // return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //       return res.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.city}, ${data.country}`);

// //       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Country not found (${res.status})`);

// //       return res.json();
// //     })
// //     .then(data => renderCountry(data[0]))
// //     .catch(err => console.error(`${err.message} 💥`));
// // };

// // btn.addEventListener('click', whereAmI);

// // /Consuming Promises with Async_Await

// let getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   try {
//     //geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //reverse geocoding
//     const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!geo.ok) throw new Error('problem getting location data');

//     const resGeo = await geo.json();
//     // console.log(resGeo);

//     //country data

//     //fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))
//     //is same as

//     const res = await fetch(
//       `https://restcountries.com/v2/name/${resGeo.country}`
//     ); //awaits the promise until promise is fulfilled or data is fetched here

//     if (!res.ok) throw new Error('problem getting location country');

//     const data = await res.json();
//     // console.log(data);
//     // renderCountry(data[0]);
//     renderCountry(data[1]);

//     return `you are in ${resGeo.city}, ${resGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`Error! ${err.message}`);

//     //reject promise returned from async function
//     throw err;
//   }
// };

// // console.log('1: will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log('2. ', city))
// //   .catch(err => console.err(`2. ${err.message}`))
// //   .finally(() => console.log('3: finished getting location'));

// //Returning Values from Async Functions

// //IIFE (Immediately Invoked Function Expression)
// // (async function () {
// //   try {
// //     const city = await whereAmI();
// //     console.log(`2. ${city}`);
// //   } catch (error) {
// //     console.error(`2. ${error.message}`);
// //   }
// //   console.log('3: finished getting location');
// // })();

// ////Running Promises in Parallel

// // const get3countries = async function (c1, c2, c3) {
// //   try {
// //     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);

// //     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);

// //     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

// //     // console.log([data1.capital, data2.capital, data3.capital]);

// //     const data = await Promise.all([
// //       getJSON(`https://restcountries.com/v2/name/${c1}`),
// //       getJSON(`https://restcountries.com/v2/name/${c2}`),
// //       getJSON(`https://restcountries.com/v2/name/${c3}`),
// //     ]);
// //     console.log(data.map(d => d[0].capital));
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // get3countries('india', 'usa', 'canada');

// ///////////////////////
// //Promise.race
// //returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
// //it returns a promise which takes the minimum time in order

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request timed out for ${sec}`));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/canada`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// //Promises.allsettled returns all promises whether fullfilled or rejected
// //the difference is that Promise.all will short circuit as soon as one promise rejects, but Promise.allSettled, simply never short circuits.

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any [ES2021]
// // Promise.any takes in an array 12:28 of multiple promises and this one will then return 12:31 the first fulfilled promise 12:34 and it will simply ignore rejected promises. 12:37 So basically Promise.any is very similar 12:40 to Promise.race with the difference 12:43 that rejected promises are ignored. 12:46 And so therefore the results of Promise.any 12:50 is always gonna be a fulfilled promise, 12:52 unless of course all of them reject, okay.

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
