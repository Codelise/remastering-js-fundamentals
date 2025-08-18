// Day 3 — Strings
// Goal: Learn concatenation, template literals, string methods.
//     Challenge 1: Create a greeting like Hello, John! using template literals.
//     Challenge 2: Convert a string to uppercase.
//     Challenge 3: Count the number of characters in your name.

// Challenge 1
var greeting = "Aeryun";
console.log(`Hello  ${greeting}`);

// Challenge 2
let upperWord = "Hello World!";
console.log(`${upperWord}`);
console.log(upperWord.toUpperCase());

// Challenge 3
const countWord = "Porsche 911 GT3";
console.log(countWord.length);

// Mini Challenge
let miniWord = "Gaming Laptop";
let lowerMiniWord = miniWord.toLowerCase();
let replace = lowerMiniWord.replace("laptop", "desktop");
console.log(replace);

// Another Mini Challenge
let largeWord = "toyota supra mk4";
let maxthisWord = largeWord.toUpperCase();
let replaceMax = maxthisWord.replace("TOYOTA", "NISSAN");
console.log(replaceMax);
