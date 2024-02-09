// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 456;

//functions
// function logger() {
//     console.log("My name is Sam");
// }

// //calling / running / invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) { //parameters
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} orranges`
//     return juice;
// }

// const appleOrangeJuice = fruitProcessor(2, 5); //arguements
// console.log(appleOrangeJuice);

// const appleJuice = fruitProcessor(7, 0)
// console.log(appleJuice);

// const num = Number('23');

//function declaration
// console.log(calcAge1(1990))
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

//function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

// console.log(calcAge1(2002) , calcAge2(2002));

//Arrow function (function without name)
// const calcAge3 = birthYear => 2023 - birthYear;
// console.log(calcAge3(1998));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(1991, 'Bob'));
// console.log(yearsUntilRetirement(2002, 'Sam'));

//function in another function
// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) { //parameters

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
//     return juice;
// }

// console.log(fruitProcessor(3,4))

//reviewing functions
const calcAge3 = (birthYear) => 2023 - birthYear;
// console.log(calcAge3(1998));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;

//     if (retirement > 0)
//     {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     }
//     else
//         console.log("already retired 😍");
//         return -1;
//     // return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(1951, 'Bob'));
// console.log(yearsUntilRetirement(1991, 'Sam'));

//////////////////////////////////
//arrays
// const friends = ['sam', 'khush', 'tisha'];
// console.log(friends);

// const years = new Array(1990, 1991, 1992, 1993);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'bansi';
// console.log(friends);
// // friends = ['bob','alice']

// const firstName = 'sam';
// const sam = [firstName, 'Ahuja', 2023 - 2002,'trainee',friends]
// console.log(sam);
// console.log(sam.length)

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 2002, 2010, 2006];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

////////
//add elements
// const friends = ['sam', 'khush', 'tisha'];
// const newLength = friends.push('Bansi');
// console.log(friends);
// console.log(newLength);

// // to get element in begining
// friends.unshift('jay');
// console.log(friends);

//remove elememts
// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("sam"));
// console.log(friends.indexOf("tisha"));
// //if element is not i n array then index of will have -1
// console.log(friends.includes(23));

// if (friends.includes('sam')) {
//   console.log('You have a friend called sam');
// }

//introduction to objects
// const sam = {
//     firstName: "samridhi",
//     lastName: "ahuja",
//     age: 2023 - 2002,
//     job: "teacher",
//     friends: ['khush', 'tisha'],
// };
// console.log(sam);

// // DOT NOTATION & BRACKET NOTATION
// console.log(sam.lastName);
// console.log(sam['lastName']);

// const nameKey = 'Name';
// console.log(sam['first' + nameKey]);
// console.log(sam['last' + nameKey]);

// // console.log(sam.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about sam? Choose between firstName, lastName, age, job, and friends');

// // console.log(sam.interestedIn);//undefined as sam object does not have any property named interestedIn
// // console.log(sam[interestedIn]);

// if (sam[interestedIn]) {
//   console.log(sam[interestedIn]);
// } else {
//   console.log('Wrong choice! Choose between firstName, lastName, age, job, and friends');
// }

// sam.location = "surat";
// sam['twitter'] = "@samridhi";
// console.log(sam);

// //challenge
// console.log(`${sam.firstName} has ${sam.friends.length} friends and her best friend name is called ${sam.friends[0]}`);

// console.log(`${sam['firstName']} has ${sam['friends'].length} friends, and her best friend is called ${sam['friends'][0]}`);

//object methods
// const sam = {
//     firstName: "samridhi",
//     lastName: "ahuja",
//     birthYear: 2002,
//     job: "teacher",
//     friends: ['khush', 'tisha'],
//     hasDriverLicense: false,

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2023 - this.birthYear;
//     //   }

//     calcAge: function () {
//       this.age = 2023 - this.birthYear;
//       return this.age;
//   },
//   getSummary: function () {
//     let summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriverLicense == true ? 'driving license' : 'no driving license'} `;
//     return summary;
//     }
//  };

// console.log(sam.calcAge());
// console.log(sam['calcAge'](sam.birthYear));
//sam.birthYear is not a good idea as if we changename of obj then error will arise so using this is best method rather hardcoding
// console.log(sam.age);
// console.log(sam.getSummary());

//Iteration - for loop
// console.log('Lifting weights repetiotion 1');
// console.log('Lifting weights repetiotion 2');
// console.log('Lifting weights repetiotion 3');
// console.log('Lifting weights repetiotion 4');

// for (let i=1; i <= 10; i++){
//   console.log((`Lifting weights repetition ${i}`));
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const obj = [
  "Jonas",
  "Joseph",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
// const types = []
// for (let i = 0;i<obj.length ; i++){
//   console.log(obj[i], typeof obj[i]);

//   //filling types array
//   // types[i] = typeof obj[i]
//   types.push(typeof obj[i])
// }
// console.log(types);

// const years = [1991, 2002, 2007, 1958];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//   ages.push(2023-years[i])
// }
// console.log(ages);

// //continue and break
// console.log('----only strings');
// for (let i = 0; i < obj.length; i++){
//   if (typeof obj[i] !== "string")
//     continue;
//   console.log(obj[i] , typeof obj[i]);
// }
// console.log('--break with numbers');
// for (let i = 0; i < obj.length; i++){
//   if (typeof obj[i] === "number")
//     break;
//   console.log(obj[i] , typeof obj[i]);
// }

//looping backwards
// for (let i = obj.length - 1; i >= 0; i--) {
//    console.log(obj[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++){
//   console.log('-----starting exercise', exercise);
//   for (let rep = 1; rep < 6; rep++){
//     console.log(`exercise ${exercise} lifting weight reptition ${rep}`);
//   }
//}

//the while loop
// for (let i = 1; i <= 10; i++) {
//   console.log((`Lifting weights repetition ${i}`));
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Repetition number ${rep}: Lifting weights...`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log('Loop is about to end....');
// }
