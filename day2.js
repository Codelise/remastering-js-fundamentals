// We’ve got three types to cover today:
// Math operators (+, -, *, /, %)
// Comparison operators (>, <, >=, <=, ===, !==)
// Logical operators (&&, ||, !)
// Let’s start small.

// Challenge 1: Add, subtract, multiply, and divide two numbers in JavaScript.
let a = 10;
let b = 3;

let add = a + b;
console.log(add);
let minus = a - b;
console.log(minus);
let times = a * b;
console.log(times);
let divide = a / b;
console.log(divide);
let modulus = a % b;
console.log(modulus);

// the modulus operator % gives you the remainder after dividing two numbers.
console.log(14 % 5); // = 4
console.log(15 % 4); // = 3

// Challenge 2: >
// Can you write code that checks if your age is greater than 18 and logs true or false?
// (Hint: You’ll need the comparison operator >.)
let age = 20;
let compare = age > 18;
console.log(compare);

// Challenge 3: &&
// Can you write the code so it checks if 12 is both positive and even, and then prints the result?
let isPositive = 12;
let condition = isPositive > 0 && isPositive % 2 === 0;
console.log(condition);

// Challenge 4: ||
// For your next challenge — check if a number is negative OR odd.
let isNigga = 21;
let nigative = isNigga < 0 || isNigga % 2 !== 0;
console.log(nigative);

// Final Challenge:
// Write a program that
// Asks for a number (you can just hardcode it for now).
// Checks if it’s positive AND divisible by 5.
// If it’s not a valid number (e.g., you try to divide by zero, or it’s not a number at all), it should throw an error and be handled in catch.
// finally should always run and print "Check complete" no matter what happened.
// Make sure:
// The check happens inside try.
// Any error (like invalid input) is handled in catch.
// finally runs no matter what.

let numero = 15;
let isCovid;

try {
  isCovid = numero > 0 && numero % 5 === 0;
  if (!isCovid) {
    throw new Error("Shit!");
  }
} catch (error) {
  console.log("It's not positive or not divisible by 5", error.message);
} finally {
  console.log("Check complete");
}
// console.log(`It's Positive and Divisible by ${isCovid} ${numero} `);
