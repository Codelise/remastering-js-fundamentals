// Day 10 — Arrow Functions & Parameters
// Goal: Write modern JavaScript functions.
// Challenge 1:
// Write an arrow function called triple that takes one number and returns it multiplied by 3.

const triple = (x) => {
  return x * 3;
};

console.log(triple(16));

// Challenge 2:
// Write an arrow function called greet that takes a name, but if no name is given, it should default to "stranger".
// 👉 Example:
// greet("Ashley") → "Hello, Ashley!"
// greet() → "Hello, stranger!"

const greet = (name) => {
  if (!name) {
    return console.log("Hello, stranger!");
  } else {
    return console.log(`Hello, ${name}`);
  }
};

greet("Ashley");

// Challenge 3:
// Write an arrow function called lastItem that takes an array and returns the last element of the array.

const last = ["cat", "dog", "hamster"];
const lastItem = () => {
  const lastElement = last.at(-1); // returns last element on array
  console.log(lastElement);
};
lastItem();

// Mini Challenge
// Create an array of pet objects. Each pet object should have:
// a name
// a species
// an age
// Then, write an arrow function called oldestPet that takes in that array and returns the pet with the highest age.
// Example idea:
// const pets = [
//   { name: "Mittens", species: "Cat", age: 2 },
//   { name: "Barky", species: "Dog", age: 5 },
//   { name: "Nibbles", species: "Hamster", age: 1 },
// ];
// And then oldestPet(pets) should return Barky (the Dog, age 5).

const myPets = [
  {
    petName: "Mittens",
    species: "Cat",
    age: 2,
  },
  {
    petName: "Beam",
    species: "Cat",
    age: 4,
  },
  { petName: "Orange", species: "Cat", age: 1 },
];

const oldest = myPets.reduce((oldest, currentPet) => {
  return currentPet.age > oldest.age ? currentPet : oldest;
});

console.log(oldest);
