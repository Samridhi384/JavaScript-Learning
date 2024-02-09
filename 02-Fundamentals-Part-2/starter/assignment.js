// function describeCountry(country,population,capitalCity) {
//     return `\n ${country} has ${population} million people and its capital city is ${capitalCity} `
// }

// const c1 = describeCountry("Finland", 6, "Helsinki");
// const c2 =describeCountry("China", 90, "Beijing");
// const c3 = describeCountry("India", 70, "Delhi");
// console.log(c1,c2,c3); // Finland has 6 million people and its capital city is Helsinki

//2nd
// function percentageOfWorld1(population, country) {
//   return `${country} has ${population} million people,so it's about ${
//     (population * 100) / 7900
//   } % of the world population.`;
// }
// const p1 = percentageOfWorld1(88875, "Beijing");
// const p2 = percentageOfWorld1(10778, "India");
// const p3 = percentageOfWorld1(9989, "Potrugral");

// console.log(p1, p2, p3);

//const percentageOfWorld2 = function(){}
//const percentageOfWorld3 =() => {}

//3rd
function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}
// function describePopulation(population, country) {
//   return `${country} has ${population} million people,so it's about ${percentageOfWorld1(
//     population
//   ).toFixed(2)} % of the world population.\n`;
// }

// const p1 = describePopulation(1441, "Beijing");
// const p2 = describePopulation(778, "India");
// const p3 = describePopulation(99, "Potrugral");

// console.log(p1, p2, p3);

//4th
const population = [11, 141, 87, 35];
console.log(population.length === 4);
const percentage = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];
// console.log(percentage);

//5th
// const neighbours = ["Nepal", "Srilanka", "Bhutan", "Bangladesh"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country");
// }

// neighbours[neighbours.indexOf("Bhutan")] = "The Bhutan";
// console.log(neighbours);

//6th
// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: 1.42,
//   neighbours: ["Nepal", "Srilanka", "Bhutan", "Bangladesh"],
// };

//7th
// console.log(
//   `${myCountry.country} has ${myCountry.population} billion ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// //8th
// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry["population"]);

//9th

// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: 1.42,
//   neighbours: ["Nepal", "Srilanka", "Bhutan", "Bangladesh"],

//   describe: function () {
//     return `${this.country} has ${this.population} billion ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//   },

//   checkIsIsland: function () {
//     this.isIsland = this.neighbours === 0 ? true : false;
//   },
// };
// // myCountry.describe();
// console.log(myCountry.describe());
// console.log("-------------");
// myCountry.checkIsIsland();
// console.log(myCountry.isIsland);

//10th
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting.`);
// }

//11th
// const percentage2 = [];
// for (let i = 0; i < population.length; i++) {
//   percentage2.push(percentageOfWorld1(population[i]));
// }
// console.log(percentage2);

//12th
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

//13th
// const percentage3 = [];
// let i = 0;
// while (i < population.length) {
//   percentage3.push(percentageOfWorld1(population[i]));
//   i++;
// }
// console.log(percentage3);

