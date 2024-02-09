'use strict';

// const book = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 110 * 2,
//   price = `${109 * numPassengers}$`
// ) {
//   //    //ES5
//   //   numPassengers = numPassengers || 110;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   book.push(booking);
// };
// // console.log(book);

// createBooking('JG453');
// createBooking('SH123', 80, '185$');
// createBooking('ER123', undefined, '1000'); //we can skip parameter value by this

//how passing arguemnets work

// const flight = 'LH234';
// const sam = {
//   name: 'Sam',
//   passport: 789456123,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH125';
//   passenger.name = 'Ms. ' + passenger.name;

//   if (passenger.passport === 789456123) {
//     alert('Checked in!');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, sam);
// console.log(sam, flight);

// //is the sam as doing this
// const passenger = sam;
// const flightNum = flight;

// const newPassport = function (person) {
//   person.passport
//   .0 = Math.trunc(Math.random() * 100000000000000);
// };

// newPassport(sam);
// checkIn(flight, sam);

//function accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order functions
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);

// transformer('Javascript is the best', oneWord);
//here upperFirstWord and oneWord are callback functions that's because we do not call them ourselves. But instead we call JavaScript to basically tell them later.

//JS uses callbacks all the time
// const high5 = function () {
//   console.log("You're awesome!");
// };

// document.body.addEventListener('click', high5);

// ['sam', 'khush', 'tish'].forEach(high5);

//Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const sayHello = greet('Hello');
// sayHello('sam');
// sayHello('khush');

// greet('HI')('sam');

// const greet2 = greeting => name => console.log(`${greeting}, ${name}!`);

// greet2('HI')('sam');

//The call and apply Methods
const indigo = {
  airline: 'Indigo',
  iataCode: 'IND',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// indigo.book(239, 'sam ahuja');
// console.log(indigo);

const spiceJet = {
  airline: 'SpiceJet',
  iataCode: 'SJ',
  bookings: [],
};

const book = indigo.book;

// book(23,'sarah'); //it is irregular function so this is not defined

//call method
// book.call(spiceJet, 23, 'sarah williams');
// console.log(spiceJet);

// book.call(indigo, 239, 'Emily Cooper');
// console.log(indigo);

const airIndia = {
  airline: 'AirIndia',
  iataCode: 'AI',
  bookings: [],
};

// book.call(airIndia, 583, 'Emily Cooper');
// // console.log(airIndia);

// //apply method not used anymore
// const flightDetail = [583, 'Gabriel'];
// book.apply(airIndia, flightDetail);
// console.log(airIndia);

// book.call(airIndia, ...flightDetail);

//bind method
// book.call(spiceJet, 23, 'sarah williams');

// const bookSJ = book.bind(spiceJet);
// const bookIND = book.bind(indigo);
// const bookAI = book.bind(airIndia);

// bookSJ(583, 'camile');
// const bookSJ12 = book.bind(spiceJet, 12);
// bookSJ12('John Doe');
// bookSJ12('Martha Cooper');

// //with event listeners
// indigo.planes = 300;
// indigo.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', indigo.buyPlane.bind(indigo));

// //partial application = preset parameters

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// //now we are bind above function by prestting rate
// //first arguement of bind method is this keyword . here it is not there so put null
// const addVat = addTax.bind(null, 0.23); //(this,rate)
// console.log(addVat(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(200));

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 78;
// })(); //wrapping up in () will give no error

// // console.log(isPrivate);

// (() => console.log('this will also run'))();

// {
//   const isPrivate = 87;
//   var issssPrivate = 87;
// }
// // console.log(isPrivate);
// console.log(issssPrivate);

////////////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
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

// //re assigning f function
// h();
// f();
// console.dir(f);

// //example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups , each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);
