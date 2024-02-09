'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2023-12-29T14:11:59.604Z',
    '2024-01-06T17:01:17.194Z',
    '2024-01-07T13:36:17.929Z',
    '2024-01-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD', //INR
  locale: 'en-US', //hi-IN
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    // So here, we have a European country with an American currency
    // const formattedMov = new Intl.NumberFormat(acc.locale, { style: 'currency', currency: 'USD' }).format(mov);
    const formattedMov = formatCur(Math.abs(mov), acc.locale, acc.currency);

    // console.log(formattedMov);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call,print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds , stop  timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //decrese 1s
    time--;
  };
  //Set time to 5 minutes
  let time = 10;

  //Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hours = now.getHours();
// const min = `${now.getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

// day/month/year

const now3 = new Date();
const options1 = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric', // numeric, long, 2-digit
  year: 'numeric',
  // weekday: 'long', // long, short, narrow
};

// To not define locale manually but instead to simply get it from the user's browser. & that's preety easy to do as well , locale means like "en-UK", "en-US" or any other languages
// const locale = navigator.language;
// console.log(locale);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options1
    ).format(now3);
    // labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now3);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// // Base 10 - 0 to 9 . 1/10 = 0.1 , 3/10 = 0.33333
// // Base 8 - 0 to 7
// // Binary Base 2 -0,1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// //Conversion
// console.log(Number('23'));
// console.log(+'23' + 23); //46

// //Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));
// //a string needs to start with number always for parseInt

// console.log(Number.parseInt(' 2.5rem '));
// console.log(Number.parseFloat('  2.5rem '));
// // these two functions here are actually also so-called global functions. So we would not have to call them on Number.
// // console.log(parseFloat(' 2.5rem '));

// //Check if value is NaN
// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN('20')); //false
// console.log(Number.isNaN(+'20x')); //true
// console.log(Number.isNaN(23 / 0)); //false

// //Checking if value is number

// //Number.isFinite doesn't forcibly convert the parameter to a number. Only finite values of the type number, result in true.
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(+'20x')); //false
// console.log(Number.isFinite(23 / 0)); //false

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// ///////////////////////////////////////
// // Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3)); //cube root

// console.log(Math.max(5, 18, 23, 11, 17));
// console.log(Math.max(5, 18, '23', 11, 17));
// console.log(Math.max(5, 18, '23px', 11, 17));

// console.log(Math.min(5, 18, 23, 11, 17));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// //0..1 -> 0...(max-min) -> adding min to both sides min...(max-min+min) -> min...max

// console.log(randomInt(10, 20));

// // Rounding integers
// // Rounding integers
// console.log(Math.trunc(23.3)); //23
// console.log(Math.trunc(23.9)); //23

// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.9)); //24

// console.log(Math.ceil(23.3)); //24
// console.log(Math.ceil(23.9)); //24

// console.log(Math.floor(23.3)); //23
// console.log(Math.floor('23.9')); //23

// //floor works in all situation so better to use
// console.log(Math.trunc(-23.3)); //-23
// console.log(Math.floor(-23.3)); //-24

// // Rounding decimals
// //toFixed return a string
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log((2.345).toFixed(3));
// console.log(+(2.345).toFixed(2));

///////////////////////////////////////
// The Remainder Operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 / 2); // 6 = 2 * 3 + 0

// console.log(7 % 2);
// console.log(7 / 2); // 7 = 2 * 3 + 1

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     //0,2,4,6,8
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     //0,3,6,9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

///////////////////////////////////////
// Numeric Separators

// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00; //1500
// const transferFee2 = 1_500; //1500

// const PI = 3.1415;
// console.log(PI);

// console.log(Number('230_000'));

///////////////////////////////////////
// Working with BigInt
// console.log(2 ** 53 - 1); //largest in number datatype
// console.log(Number.MAX_SAFE_INTEGER);
// //unsafe numbers
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

//bigint used to store numbers as large as we want
// console.log(8888888888885555554256596333333358n); //n using means bigint
// console.log(BigInt(8888888888885555554256596333333358));
//JavaScript will first have to still represent this number here internally, before it can then transform it into a BigInt. And that's the reason why here from a certain point on this second number is different. So this constructor function should probably only be used with small numbers,

// console.log(BigInt(888888888));

// //Operations
// console.log(1000n + 1000n);
// console.log(5441236997458784588456854656695854n * 100000000n);

// const huge = 12345678901234578899652556633663n;
// const num = 23;
// // console.log(huge / num); //error
// console.log(huge * BigInt(num));

// //Execptions
// console.log(20n > 15); //true
// console.log(20n === 15); //false
// console.log(typeof 20n); //bigint
// console.log(20n == '20'); //true

// console.log(huge + ' is really big!!');
// // console.log(Math.sqrt(16n)); //error
// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

///////////////////////////////////////
// Creating Dates

// Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Jan 08 2024 18:05:15'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// //indexes from 0 so 10 means november month
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));

// //days to milliseconds
// //for 3 days
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
//value is called timestamp for day 3

//Working with dates
// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); //2142237185000/(1000*60*60*24*365 )
// //timestamp is in milliseconds from 1 jan 1970 to the date entered

// console.log(new Date(2142237185000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

/////////////////
//Operation with dates
const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2024, 9, 18), new Date(2024, 0, 8));
// console.log(days1);

//timer
//setTimeout()

const ingredients = ['cheese', 'oliveS'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting....'); //first it will execute

//cancel the timeout
if (ingredients.includes('olives')) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  // console.log(now);
}, 1000);

////////////
// INTERNATIONALIZING DATES
// JS has a new Internationalization API - To easily format numbers & strings according to different languages
// So with this new api, we can make our apps support different languages for users around the world

//////////////////////////////////////////////////////////
// INTERNATIONALIZING NUMBERS
// Number is now formatted using these dividers or separators (commas) here
const n = 38854621.035;
const options = {
  style: 'unit',
  // unit: 'mile-per-hour',
  // unit: 'celsius',
  // style: 'percent'
  style: 'currency',
  currency: 'INR', // currency is defined manually it can't be defined from locale
  // useGrouping: false, // number is printed without the separators as it is.
};

// console.log('US: ', new Intl.NumberFormat('en-US', options).format(n));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(n));
// console.log('India: ', new Intl.NumberFormat('hi-IN', options).format(n));
// console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(n));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(n)
// );
