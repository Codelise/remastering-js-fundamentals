// Goal: Learn let, const, var, and store strings, numbers, booleans.
// Challenge 1: Store your name, age, and whether you like coffee. Print them.
// Challenge 2: Change your age variable and print the new value.
// Challenge 3: Use typeof to check the type of each variable.

//1.
const myName = "Aeryun Clay Caluscos";
let age = 20;
var coffee = "I love coffee ☕!";

console.log(myName);
console.log(age);
console.log(coffee);

//2. Updating/Changing numbers
age = 21;
console.log(age);

//3. Using typeOf to check the data type of a variable
console.log("Variable myName was a: " + typeof myName);
console.log("Variable age was a: " + typeof age);
console.log("Variable coffee was a: " + typeof coffee);

//4. Updating/Changing Var value
coffee = "Tea Time! 🫖";
console.log(coffee);

// MINI CHALLENGE
// Create a const variable called birthYear and give it your birth year.
// Create a let variable called currentYear and set it to 2025.
// Create a var variable called favoriteDrink and give it any drink name.
// Then:
// Try to update all three variables.
// Predict which ones will work and which will throw an error before you run the code.
// What’s your prediction?

const birthYear = 2005;
let currentYear = 2025;
var favoriteDrink = "Sting Energy Drink";

currentYear = 2024;
favoriteDrink = "Coca-Cola";

// The code will skip the birthYear because of try catch block and still continue to run the other variables
try {
  birthYear = 2012;
} catch (error) {
  console.log("Oops it's a CONST you idiot!", error.message);
}

console.log(currentYear);
console.log(favoriteDrink);

// A bit more challenging
// Declare three variables:
// const for something that should never change (like planet = "Earth").
// let for something that can change sometimes.
// var for something flexible (but less safe).
// Update all three variables inside a try...catch, but make one update intentionally illegal (changing the const).
// Still print all variables at the end, proving your code doesn’t crash.

const carBrand = "Nissan";
let tires = "Track Tires";
var fuel = 2.6;

try {
  tires = "Drift Tires";
  fuel = 1.6;
  carBrand = "Mazda"; // move this below so that it will be skipped and other codes will still run
} catch (error) {
  console.log("Dafuqqq", error.message);
}

console.log(carBrand);
console.log(tires);
console.log(fuel);

// Challenge:
// Make it so:
// tires always becomes "Drift Tires" no matter what.
// fuel only updates if no error happens.
// carBrand stays a const and still causes an error.
// Hint: You’ll need both the try and finally blocks — and remember, finally always runs after the try or catch.

// The fuel won't be updated because or carBrand error while the tires will always be updated because of finally runs even in error
try {
  carBrand = "Subaru";
  fuel = 6.0;
} catch (error) {
  console.log("SHIIIIIIT", error.message);
} finally {
  tires = "Drift tires";
}

console.log(carBrand);
console.log(fuel);
console.log(tires);

// the fuel and tires will always be updated because it's inside the finally block now. Still the error message will print before the vars
try {
  carBrand = "Subaru";
} catch (error) {
  console.log("SHIIIIIIT", error.message);
} finally {
  fuel = 6.0;
  tires = "Drift tires";
}

console.log(carBrand);
console.log(fuel);
console.log(tires);
