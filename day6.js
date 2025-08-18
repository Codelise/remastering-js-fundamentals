// Day 6 — Arrays
// Goal: Store and access lists of data.
//     Challenge 1: Store 5 favorite foods in an array and print them.
//     Challenge 2: Add an item to the array.
//     Challenge 3: Remove the last item from the array.

// Challenge 1
let cravings = ["Donut", "Choco Mucho", "Cloud 9", "Pizza", "Shawarma"];
cravings.push("Fried Chicken"); // Challenge 2
cravings.pop(); // Challenge 3
for (let i = 0; i < cravings.length; i++) {
  console.log(cravings[i]);
}

// Mini Challenge
// Can you write code that:
// Adds "Burger" to the beginning of the array
// Removes "Cloud 9" (wherever it is in the list)
// Prints the array again
let cars = ["Toyota", "Lexus", "Nissan", "Mazda", "Mitsubishi", "Subaru"];
cars.unshift("Honda"); // to add first on array
cars.splice(5, 1); // (index of item, number of items to be remove)
for (let o = 0; o < cars.length; o++) {
  console.log(cars[o]);
}

// Last Mini Challenge
// Mini Challenge – Array Combo Moves
// Start with an array of 5 fruits.
// Add one fruit to the end and one to the start.
// Remove the 3rd fruit in the current array.
// Replace the last fruit with "Dragonfruit".
// Loop through the array and print each fruit
let fruits = ["Apple", "Banana", "Grapes", "Orange", "Berries"];
fruits.push("Mango");
fruits.unshift("Kiwi");
fruits.splice(2, 1);
fruits.splice(5, 1, "Dragonfruit");
let fruit;
for (fruit of fruits) {
  console.log(fruit);
}
