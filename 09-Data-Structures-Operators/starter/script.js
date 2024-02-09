'use strict';

//  string method practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
// console.log(getCode('samridjid'));
for (const flight of flights.split('+')) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(';');
  // console.log(type);
  // console.log(`${from} to ${to} is a ${time} flight`);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  const output1 = `${type.startsWith('_Delayed') ? '..' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} ${time.replace(':', 'h')}`.padStart(
    36,
    '+'
  );
  // console.log(output1);
  // console.log(output);
}

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    //`day-${2+4}`
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'Regents square',
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

///////////////////////////////////////
// Working With Strings - Part 3

//split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('sam ahuja'.split(' '));

// const [firstName, lastName] = 'sam ahuja'.split(' ');

// const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];
//   for (const n of names) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(' '));
// };

// capitalizeName('samridhi manish ahuja');
// capitalizeName('samridhi ahujaaaaa');

// //padding means to add char to some desire
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('samridhi'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

//repeat
// const message2 = 'Bad weather...All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(7);
// planesInLine(12);
// planesInLine(13);

///////////////////
// Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization in name
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// // console.log(passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //comparing emails
// const mail = 'sam@gmail.com';
// const otherMail = '   Sam@Gmail.COM  \n';

// const lowerMail = otherMail.toLowerCase();
// console.log(lowerMail);
// const trimmedMail = lowerMail.trim();
// console.log(trimmedMail);
// const normalMail = otherMail.toLowerCase().trim();
// console.log(normalMail);
// console.log(mail === normalMail);

//replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door  23!';

// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); //for globally

//Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airb') && plane.endsWith('neo'))
//   console.log('Welcome to new AIRBUS FAMILY');

// //PRACTICE EXERCISE
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun'))
//     console.log('You are not allowed on board');
//   else console.log('Welcome aboard');
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
// Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal')); //-1 means that it does not belong to string

// console.log(airline.slice(4));
// console.log(airline.slice(0, 5));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('YOU GOT MIDDLE SEAT');
//   else console.log("SORRY YOU DON'T HAVE A MIDDLE SEAT");
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

//map iterations
// const questions = new Map([
//   ['question', 'what is the best programming language in the world'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'correct ans'],
//   [false, 'try again!'],
// ]);
// console.log(questions);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log('hoursMap :>> ', hoursMap);

// //quiz app
// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') {
//     console.log(`Option ${key} : ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer'));

// console.log(questions.get(questions.get('correct') === answer));

// console.log(questions.get(questions.get('correct')));

// //map to array
// console.log([...questions]);
// // console.log([...questions.entries()]);
// console.log([...questions.keys()]);
// console.log([...questions.values()]);

//maps fundamentals
// const rest = new Map();
// rest.set('name', 'Eat with Aroma');
// rest.set(1, 'Surat, Gujarat');
// console.log(rest.set(2, 'Madgaon, Goa'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// // console.log(rest.get('1'));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr1 = [1, 2];
// // rest.set([1, 2], 'Test');
// rest.set(arr1, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr1));

/////
///////////////////////
//sets
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Garlic Bread',
//   'Pasta',
//   'Pizza',
//   'Garlic Bread',
// ]);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread')); //array has include method

// orderSet.add('Salad');
// orderSet.add('Salad');
// // orderSet.clear(); //to delete all elements
// orderSet.delete('Salad');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef']).size);

// console.log(new Set('samridhiahuja').size);

//////////////////////
//Looping Objects: Object Keys, Values, and Entries

//property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// //[key,vale] as object destructring
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//////////
//optional chaining
//optional chaining with optional chaining,if a certain property does not exist, then undefined is returned immediately.

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   // const open = restaurant.openingHours[day]?.open || 'closed';
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(`on ${day} we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exists');

// //array
// const users = [{ name: 'John', rollno: 1 }];
// console.log(users[0]?.name ?? 'user array empty');

// if (users.length > 0) console.log(users[0]?.name ?? 'user array empty');

//////////
//object destructuring
// restaurant.orderDelivery({
//   time: '22:30',
//   address: '111 , Regent square',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({});
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // console.log({ a, b });
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////
//destructing arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//spread operator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays,strings,maps,sets . Not objects
// const str = 'sam';
// const chars = [...str, ' ', 'S.'];
// console.log(chars);
// console.log(...str);
// console.log(`${...str} sam`);

//real-world examples
// const ingredients = [
//   prompt("Let's make pasta!Ingredient 1?"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant }; //shallow copy
// restaurantCopy.name = 'Eat with Aroma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//rest operator and parameters

//spread because on Right side of =
const arr = [1, 2, ...[3, 4]];

//rest because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// //rest means to collect rest of the elements in destructuring

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// //IN ARRAY WE CAN GIVE ANY NAME TO VARIABLES IN LEFT SIDE AS IT FOLLOWS THE ORDER
// // const [pizza, , risotto, ...otherFood,bread] we can not do this as rest included last of elements and it shoulb be last
// console.log(pizza, risotto, otherFood);

// //objects
// //WHILE IN OBJECT WE HAVE TO ASSIGN THE SAME NAME OF VAR FROM ABOVE OBJECT AS IT HAS DIFF ORDER
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// //functions
// //rest parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 3, 7, 2, 6, 8, 7, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'paneer', 'oregano');
// restaurant.orderPizza('mushroom');

///////////////////////////
//short circuiting

//logical operator use any data type, return any data type , short-circuiting
// console.log('------OR------');
// console.log(3 || 'sam');
// console.log('sam' || 3);
// console.log('' || 'sam');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 44 || null);

// restaurant.numGuest = 0; //falsy value
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('----AND-----');
// console.log(0 && 'sam');
// console.log(7 && 'sam');

// console.log('hi' && 8 && null && 'sam');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('paneer', 'spinach');

/////
//nullish
// restaurant.numGuest = 0; //falsy value
// const guest = restaurant.numGuest || 10;
// console.log(guest);

// //nullish: null and undefined(  works fro r= not ,0 or '')
// //it uses nullish value instead of falsy values
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

///////////
//logical assignment operator
const rest1 = {
  name: 'taj',
  //numGuests:80,
  numGuests: 0,
};

const rest2 = {
  name: 'la pino',
  owner: 'sam ahuja',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//or assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
//this is truthy right now and so therefore, the second value will then actually be evaluated and returned.
// rest1.owner = rest1.owner && '<ANNOMYNOUS>';
// rest2.owner = rest2.owner && '<ANNOMYNOUS>';

rest1.owner &&= '<annomynous>';
rest2.owner &&= '<annomynous>';

// console.log(rest1, rest2);

//////////////////////
//looping arrays : for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

// console.log([...menu.entries()]);
//for of loop is meant to give current element
//////////

//object literals
