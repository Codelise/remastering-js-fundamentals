// Day 8 — Objects
// Goal: Store data in key-value pairs.
//     Challenge 1: Create an object for yourself (name, age, hobbies).
//     Challenge 2: Change a value in the object.
//     Challenge 3: Add a new property to the object.


// Challenge 1
const personalObject = {
    name: "Aeryun Clay Caluscos",
    age: 20,
    hobbies: ["Cycling", "Coding", "Gaming", "Modding"]
};

// Challenge 2
personalObject.age = 21;

// Challenge 3
personalObject.favoriteColors = ["blue", "black", "grey", "pink", "neon", "purple"]
// console.log(personalObject);
console.dir(personalObject); // Similar to console.log but more detailed
// console.dir("I'm not just logging, I'm debugging in 4K UHD!");

// Mini Boss Challenge
// Make a pet object with at least:
// name (string)
// species (string)
// age (number)
// Add a method speak() (a function inside the object).
// Inside speak(), make it console.log something silly that matches the pet.

const myBuddy = {
    petName: "Taba",
    species: "Cat",
    age: 1,
    meow: function(){ // I DON'T KNOW THAT YOU CAN ADD METHODS/FUNCTIONS INSIDE OBJECTS HAHAHAHA
        console.dir("Meow Meow nigga!");
    },
    play: function(){
        console.dir("Woooosh! I'm fast as fuck boiii!");
    }
};

myBuddy.meow(); // This will output the meow: function() inside the object
myBuddy.play();
console.dir(myBuddy); 

