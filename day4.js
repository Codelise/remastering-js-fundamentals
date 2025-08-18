// Day 4 — Conditionals
// Goal: Use if, else if, else, and switch.
//     Challenge 1: Check if a number is positive, negative, or zero.
//     Challenge 2: Ask for a grade (A, B, C, etc.) and print a message with switch.
//     Challenge 3: Check if a number is divisible by both 3 and 5.

// Challenge 1
const numero = -16;

if (numero > 0) {
  console.log(`${numero} was a positive number`);
} else if (numero < 0) {
  console.log(`${numero} was a niggative number`);
} else {
  console.log(`${numero} is ZERO`);
}

// Challenge 2
var yourGrade = "A";

switch (yourGrade) {
  case "A":
    console.log(`Excellent Grade ${yourGrade}!`);
    break;
  case "B":
    console.log(`Very Good Grade ${yourGrade}!`);
    break;
  case "C":
    console.log(`Keep Studying better ${yourGrade}!`);
    break;
  default:
    console.log("You piece of shit!");
}

// Challenge 3
const isOdd = 15;
if (isOdd % 3 === 0 && isOdd % 5 === 0) {
  console.log(`${isOdd} is divisible by 3 and 5`);
} else {
  console.log(`${isOdd} is not divisible by 3 and 5`);
}

// Mini Challenge
// Say "divisible by both" if it’s divisible by 3 and 5
// Say "divisible by 3 only" if it’s divisible by 3 but not 5
// Say "divisible by 5 only" if it’s divisible by 5 but not 3
// Otherwise say "not divisible by 3 or 5"

const isGoat = 30;
if (isGoat % 3 === 0 && isGoat % 5 === 0) {
  console.log(`${isGoat} was divisible by both 3 and 5!`);
} else if (isGoat % 3 === 0) {
  console.log(`${isGoat} was divisible only by 3!`);
} else if (isGoat % 5 === 0) {
  console.log(`${isGoat} was only divisible by 5!`);
} else {
  console.log(`${isGoat} was not divisible by 3 or 5`);
}

// Switch converted.
const isGoated = 15;
switch (
  true // Switch must be true or false answer only that
) {
  case isGoated % 3 === 0 && isGoated % 5 === 0:
    console.log(`${isGoated} was divisible by both 3 and 5!`);
    break;
  case isGoated % 3 === 0:
    console.log(`${isGoated} was only divisible by 3!`);
    break;
  case isGoated % 5 === 0:
    console.log(`${isGoated} was only divisible by 5!`);
    break;
  default:
    console.log(`${isGoated} was not divisible by 3 or 5`);
}

// NOTE
// Use switch(true) when each case is a condition you want to test, not a fixed value you want to match.
// switch(value) → when you already know the value and are just matching it.
// switch(true) → when you want to check conditions like x > 5, x % 3 === 0, etc.

// Last Challenge for day 3 and day 4
// Write a program that takes a number and:
// Uses if / else to check if it’s positive, negative, or zero.
// Then, uses switch(true) to check if it’s divisible by 2, 3, both, or neither.
var megaNumber = -12;
if (megaNumber > 0) {
  console.log(`${megaNumber} was a positive number`);
} else if (megaNumber < 0) {
  console.log(`${megaNumber} was a negative number`);
} else {
  console.log(`${megaNumber} was ZERO`);
}

switch (true) {
  case megaNumber % 2 === 0 && megaNumber % 3 === 0:
    console.log(`${megaNumber} was divisible by both 2 and 3`);
    break;
  case megaNumber % 2 === 0:
    console.log(`${megaNumber} was divisible by 2 only`);
    break;
  case megaNumber % 3 === 0:
    console.log(`${megaNumber} was divisible by 3 only`);
    break;
  default:
    console.log(`${megaNumber} was neither divisible by 2 or 3`);
}
