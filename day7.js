// Day 7 — Array Methods
// Goal: Use .push(), .pop(), .map(), .filter(), .reduce().
//     Challenge 1: Use .map() to make an array of numbers doubled.
//     Challenge 2: Use .filter() to keep only numbers greater than 10.
//     Challenge 3: Use .reduce() to sum all numbers in an array.

// Challenge 1
let numDouble = [3, 6, 9, 12, 15];
for (let num of numDouble.map((num) => num * 2)) {
  console.log(num);
}

// Challange 2
const ten = numDouble.filter((nigga) => nigga > 10);
console.log(ten);

// Challenge 3
const sum = numDouble.reduce(
  (accmulator, currentVal) => accmulator + currentVal,
  0
);
console.log(sum);
