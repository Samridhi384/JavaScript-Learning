'use strict';

//constructor function
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//never do this
//   this.calcAge = function () {
//     return 2018 - this.birthYear;
//   };
// };

// const sam = new Person('Sam', 2002);
// console.log(sam);

//1. New {} is created.
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

// const khush = new Person('khush', 2003);
// const Emily = new Person('Emily', 2003);
// console.log(khush, Emily);

//an object created from a class is called an instance
//js does not have inbuilt class feature in traditional method

// console.log(sam instanceof Person);
// console.log(typeof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//  // Whatever object i.e. Person is calling the method will be the this keyword inside of that function. So here this keyword is simply that entire constructor function

//   console.log(this); //Person
// };
// Person.hey();
//sam.hey() will give error as hey() function is not in sam prototype

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// sam.calcAge();

// console.log(sam.__proto__); //so this is the prototype of Jonas.It's not the prototype property but it is simply the prototype

// console.log(sam.__proto__ === Person.prototype); //true
// console.log(Person.prototype.isPrototypeOf(sam)); // true
// // this confirms person dot prototype is indeed the prototype of Jonas.

// console.log(Person.prototype.isPrototypeOf(Person)); // false
// //here consider prototype property as prototype of linked objects property

// Person.prototype.species = 'Homo Sapiens';
// console.log(sam.species, khush.species);

// //own properties are only the ones that are declared directly on the object itself.

// console.log(sam.hasOwnProperty('firstName')); //true
// console.log(sam.hasOwnProperty('species')); //false

// //Prototypal Inheritance on Built-In Objects
// console.log(sam.__proto__);
// //Object.prototype (top of prototype chain)
// console.log(sam.__proto__.__proto__);
// console.log(sam.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor);

// //prototype of arrays

// const arr = [3, 5, 2, 1, 6, 1, 8, 6, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //true

// console.log(arr.__proto__.__proto__); //object's prototype as prototype is object only

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

/////////////////////////////////
//ES6 Classes
//bts = classes are functions

//class expression
//const PersonCl = class {}

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Instance method
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet = function () {
//     console.log(`Hey ${this.fullName}`);
//   };

//   // Getter is indeed just like any other regular method that we set on the prototype
//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //static method = does not access to instances
//   static hey() {
//     console.log('Hey there!');
//     console.log(this); //points to whole class
//   }
// }

// //Instance
// const jessica = new PersonCl('jessica davis', 1992);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.fullName);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are NOT Hoisted i.e. we can not use it without or before declaration
// // 2. Classes as we can we can pass them into functions and also return them from functions
// // 3.Classes are executed in strict mode. (even if we do not use strict mode)

// //////////////////////////////////////////////////////////////////
// // SETTERS & GETTERS
// // Can be very useful for data validation
// // We call these special properties - Assessor properties while normal properties r called data properties
// //getters and setters are basically functions that get and set a value
// const walter = new PersonCl('Walter white', 2000);

// PersonCl.hey();

// const account = {
//   owner: 'Sam',
//   movements: [250, 340, 225, 377],

//   // Getter
//   get latest() {
//     return this.movements.slice(-1).pop(); //shallow copy
//   },

//   // Setter
//   // Any setter method needs to have exactky 1 parameter
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// call this as a property & not as a method
// this is very useful when we have to read some property but still need to do some calculations before.
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

///////////////////
//Inheritance Between _Classes__ Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   //   Person(firstName, birthYear); //error as this is irregular function call and here this is undefined
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //before introduce method as it was after than it could override the method

// //Linking prototype
// Student.prototype = Object.create(Person.prototype);
// // Student.prototype = Person.prototype; // not work

// Student.prototype.introduce = function () {
//   console.log(`Hi! I'm ${this.firstName}, studying ${this.course}`);
// };

// const sam = new Student('sam', 2002, 'IT');
// sam.introduce();
// sam.calcAge();

// console.log(sam.__proto__);
// console.log(sam.__proto__.__proto__);

// console.log(sam instanceof Student);
// console.log(sam instanceof Person);
// console.log(sam instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// // //////////////////////
// //Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // steven is an empty object & it will be  linked to this PersonProto obejct, which will be its prototype
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2005;
// steven.calcAge();
// console.log(steven);

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2000);
// sarah.calcAge();
// console.log(sarah);

////////////////////////
//Inheritance between ES6 Classes

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance method
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet = function () {
    console.log(`Hey ${this.fullName}`);
  };

  // Getter is indeed just like any other regular method that we set on the prototype
  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method = does not access to instances
  static hey() {
    console.log('Hey there!');
    console.log(this); //points to whole class
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi! I'm ${this.fullName}, studying ${this.course}`);
  }

  //it is essentially overriding the method coming from the parent class. And we can also say that this calcAge method here is shadowing the one that is in the parent class.
  calcAge() {
    console.log(`i am ${2024 - this.birthYear} years old`);
  }
}

const martha = new StudentCl('martha jones', 2004, 'IT');
// martha.introduce();
// martha.calcAge();

// //////////////////////
//Inheritance with Object.create
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi! I'm ${this.fullName}, studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay Zhang', 1998, 'CS');
// jay.introduce();
// jay.calcAge();

//StudentProto object is now the prototype off the jay object. So again, the StudentProto object 2:02 is now the prototype of jay,and the PersonProto object is in turn the prototype of StudentProto. And so therefore, PersonProto is a parent prototype of jay, which means that it's in its prototype chain.

//in js properties means fields

//methods are functions associated to objects

//1)Public fields
//2)Private fields
//3)Public methods
//4)Private methods
//there is also static versions

//another class example
class Account {
  //1) public fields (instances)
  locale = navigator.language;

  //2) Private fields
  #movements = [];
  #pin; //creating empty variable

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = []; //protected property
    // this.locale = navigator.language;

    console.log(`thanks for opening an account , ${owner}`);
  }

  //3) Public methods

  //Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; //open forr chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  static helper() {
    console.log('helper');
  }

  //4) Private methods

  _approveLoan(val) {
    // #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'INR', 1111, []);

// acc1.movements.push(560);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1._approveLoan(1000); //we do not need to access this but still we are getting it
console.log(acc1.getMovements());

// console.log(acc1.#movements); //give error
// console.log(acc1.pin);//undefiend
// console.log(acc1.#pin);//error

// acc1.#approveLoan(1000); //we are getting error but it is taking as private fields so not supported by google chrome

Account.helper(); //we can use by this only

///////////////////
//Chaining methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
