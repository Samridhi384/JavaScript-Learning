'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //as js tries to find the variable in current scope
//   function printAge() {
//     let output = `${firstName} , You are ${age} years old, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 2002 && birthYear <= 2010) {
//       var passedOut = true;
//       //creating new variable with same name as outer scopes variable.
//       const firstName = 'khush';

//       //Reassigning outer scopes variable.
//       output = 'new output';

//       const str = `congrats ${firstName} you do not belong to gen z`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(passedOut);
//     console.log(output);
//     // console.log(add(2, 3));
//     //here if we use without strict mode it will work but if we use it then it will show error
//   }
//   printAge();
//   return age;
// }

// const firstName = 'sam';
// calcAge(2002);
// // console.log(age);
// //age is only for inner scope inside functions and not in outer scope.

//variables
// console.log(me); // return undefined
// // console.log(job); // it is in tdz
// // console.log(year);

// var me = 'sam';
// let job = 'teacher';
// const year = 1998;

// //functions
// console.log(addDec(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;
// //only function declaration was used before initialzation

// //example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();
// console.log(numProducts);
// var numProducts = 10;
// //so instead use const
// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

//this keyword
// console.log(this);

// const calcAge = function (year) {
//   console.log(2024 - year);
//   console.log(this);
// };

// calcAge(2002);

// const calcAgeArrow = year => {
//   console.log(2024 - year);
//   console.log(this);
// };

// calcAgeArrow(2002);
// //Why is the this keyword undefined in this function, but window in this function? Well, it is because the arrow function does not get its own this keyword. So instead the arrow function simply uses the lexical this keyword, which means that it uses the this keyword of its parent function or of its parents scope which is used globally.

// // const sam = {
// //   year: 2002,
// //   //   age: () => console.log(2024 - this.year),//nan
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2024 - this.year);
// //   },
// // };
// // sam.calcAge();

// // const khush = {
// //   year: 2006,
// // };
// // khush.calcAge = sam.calcAge;
// // khush.calcAge();

// // const f = sam.calcAge;
// // f(); //regular function

// var firstName = 'xyz';

// const sam = {
//   firstName: 'sam',
//   year: 2002,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2024 - this.year);

//     //solution 1
//     // const self = this;

//     // const isActive = function () {
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //solution 2
//     const isActive = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isActive();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(` hi ${this.firstName}`);
//   },
// };
// sam.greet();
// sam.calcAge();
// // console.log(this.firstName);

// //arg keyword is only available in regular function
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (x, y) => {
//   console.log(arguments);
//   return x + y;
// };
// addArrow(2, 5, 8);

//primitives vs objects

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'sam',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log(friend);
// console.log('--------');
// console.log(me);

//primitive types
let lastName = 'williams';
let lastOldName = lastName;
lastName = 'Davis';
console.log(lastName, lastOldName);

//refrence types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before wedding', jessica);
console.log('after wedding', marriedJessica);

//copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';
console.log('before wedding', jessica2);
console.log('after wedding', jessicaCopy);

//Object.assign creates shallow copy and not the deep copy
jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log('before wedding', jessica2);
console.log('after wedding', jessicaCopy);
