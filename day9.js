// Day 9 — Functions
// Goal: Write reusable code.
//     Challenge 1: Write a function that returns the square of a number.
//     Challenge 2: Write a function that greets a person by name.
//     Challenge 3: Write a function that takes two numbers and returns their sum.

// Challenge 1
function square(x) {
    return x * x;
}
console.dir(square(10));

// Challenge 2
function she(herName){
    console.dir(`You beautiful ${herName}`);
}
she("Ashley");

const baddie = (sheName) => {
    console.log(`She baddie tough ${sheName}`);
}
baddie("Ashley");

// Challenge 3
const sum = (yin, yang) => {
    return yin + yang;
}
console.dir(sum(8, 10));

// Mini Challenge
// Write a function called average that takes in 3 numbers and returns their average (mean).
const avg = (a, b, c) => {
    let sum = a + b + c;
    let div = sum / 3;
    return div;
}

console.dir(avg(10, 8, 20));

// Mini Challenge from day 8 and 9
const myCat = {
    petName: "Mittens",
    species: "Cat",
    age: 2,
    birthday : () => {
        myCat.age++;
        console.log(`Happy Birthday ${myCat.petName} You are now ${myCat.age} years old!`) 
        
    },
    eat: () => {
        console.log(`${myCat.petName} just over eat again`); 
    }
}
myCat.birthday();
myCat.eat();