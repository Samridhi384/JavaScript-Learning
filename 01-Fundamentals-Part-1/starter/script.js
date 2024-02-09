// //values
// let js = 'amazing';
// if(js === 'amazing') alert("JS is fun!")
// 80-9*8
// console.log(80-9+8)

// console.log(89);
// let firstName = "Sam";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //let function = 28; 
// let $function = 27;
// console.log($function);
// // let Person = "khush" not possible
// let PI = 78;
// console.log(PI);

// let myFirstJob = "Coder";
// console.log(myFirstJob);

// let job1 = "Programmer" 

//datatypes
// let javascriptIsFun = true
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 18);
// console.log(typeof "true");

// javascriptIsFun = "sam";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);

// year = 2002
// console.log(year);

// console.log(typeof null);
// console.log(typeof NaN);

//let,var,const
// let age =90;
// age =91;

// const year = 30;
// // year=31;

// // const job;

// var job ="teacher";
// job = "coder";

//operators

// //math operators
// const now = 2043
// const ageSam = now-2002;
// const ageJonas = now-1991;
// console.log(ageSam,ageJonas);

// console.log(ageJonas*2,ageJonas/2,2**3);
// //2**3 means 2 raised to 3

// const firstName = "samridhi";
// const lastName = "ahuja";

// console.log(firstName+' ' + lastName);

// //assignment operators
// let x = 10+5; // 15
// x += 10 ;//x=x+10=25
// x *= 4 ;//x=x*4=100
// x ++ ;
// x --;
// x --;
// console.log(x);

// //comparison operators
// console.log(ageJonas > ageSam); //>,<,<=,>=
// console.log(ageJonas>18);

// console.log(now - 1990 > now - 1999);

// console.log(25-10-5);

// let a,b;
// a = b = 25-10-5;
// console.log(a , b);

// const averageAge = (ageJonas + ageSam) / 2;
// console.log(ageJonas, ageSam, averageAge);


//strings and template literals
// const firstName = 'Samridhi';
// const job = 'teacher';
// const birthYear = 2002;
// const year = 2023;

// const sam = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(sam);

// const samNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(samNew);

// console.log("just a random string....");

// console.log('String with \n multiple \n lines');

// console.log(`String
// multiple
// lines`);

////////////////
//taking decisions

// const age = 11;
// const isOldEnough = age >= 18 ;
// if(isOldEnough)
// {
//     console.log("You can have the driving license 🚔");
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`Sorry you are too young. Wait for ${yearsLeft} years.`);
// }

// const birthYear = 1988;
// let century;

// if(birthYear <= 2000){
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(century);

/////
//typing conversions
// const inputYear = '2018 ';
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number("sam"));

// console.log(String(23),23);

// //type coercions
// console.log("I am " + 21 + " years old");
// console.log(('23' - '10' - 3));
// console.log(('23' + '10' + 3));
// console.log(('23' * '10'));
// console.log(('23' / '10'));

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('sam'));
// console.log(Boolean({}));

// const money = 100;
// if(money){
//     console.log("Don't spend much money!");
// }
// else{
//     console.log("Do some job to earn");
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

//equality operator
// const age = '18';
// if(age === 18) console.log("you just became an adult(strict)");
// if(age == 18) console.log("you just became adult (loose)");

// const favourite = Number(prompt("what is your fav number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 15){
//     console.log("Cool! 15 is an amazing number.");
// }
// else if(favourite === 7){
//     console.log(("7 is also a cool number"));
// }
// else if(favourite === 9){
//     console.log("9 is cool number");
// }
// else{
//     console.log("number is not 15 or 7 or 9");
// }

// if(favourite !== 15) console.log("Why not 15??");

/////////////////////////////////
//logic operators
// const hasDrivingLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// // if( hasDrivingLicense && hasGoodVision) console.log("You can drive!");
// // else console.log("Sorry, you cannot drive");

// const isTired = false; //C
// console.log(hasDrivingLicense && hasGoodVision && isTired);
// if(hasDrivingLicense && hasGoodVision && !isTired) console.log("You can drive!");
// else console.log("Sorry, you cannot drive");

//switch statement
// const day= "Monday";
// switch(day){
//     case "Monday": //day === "Monday"
//         console.log("Hello Monday");
//         console.log("Why you come everytime?😢");
//         break;
//     case "Tuesday":
//         console.log("Hello Tuesday");
//         break;
//     case "Wednesday":
//     case "Friday":
//         console.log("Thank you for coming Friday");
//         break; //break will break the connection to execute further
//     case "Saturday":
//     default:
//         console.log("Enjoy holidays");
    
// }
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//   } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
//   } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
//   } else if (day === 'friday') {
//     console.log('Record videos');
//   } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
//   } else {
//     console.log('Not a valid day!');
//   }
  
////////////////////////////////////
// Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'sam';
// console.log(`I'm ${2037 - 2002} years old ${me}`);

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 21;
// // age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

// const drink = age >= 18 ? 'wine🍷' : 'water💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I am ${age} years old so i like to drink ${age>=18 ? 'wine' : 'water'}`);