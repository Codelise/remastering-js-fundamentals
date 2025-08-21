// Quick intro before challenges
// Think of localStorage like a little notebook your browser keeps.
// It saves data as strings (even numbers get stored as strings).
// It doesn’t get erased when you refresh or close the page (unless you manually clear it).
// You interact with it using simple methods:
// localStorage.setItem("key", "value") → saves data
// localStorage.getItem("key") → gets data back
// localStorage.removeItem("key") → deletes one
// localStorage.clear() → deletes everything

// Day 13 — localStorage
// Goal: Save data in the browser.
//     Challenge 1: Store your name in localStorage.
//     Challenge 2: Retrieve and print your stored name.
//     Challenge 3: Save a number, refresh the page, and still see it.

// // Challenge 1
// localStorage.setItem("username", "Aeryun");
// const colors = ["Blue", "Black", "White", "Purple", "Pink"];
// localStorage.setItem("colors", JSON.stringify(colors)); // JSON.stringify converts the array/object into string

// // Challenge 2
// const getItem = localStorage.getItem("username"); // get the item using the (key)
// console.log(getItem);

// const getColors = localStorage.getItem("colors");
// const userColors = JSON.parse(getColors); // Since the value was JSON.stringify, we need to parsed it back using JSON.parse, for array/objects only
// console.log(userColors);

// // Challenge 3
// const inputNum = document.getElementById("numInput");
// const numBtn = document.getElementById("numBtn");
// const showNum = document.getElementById("showNum");

// // Check if the number was saved and exists
// const isExist = localStorage.getItem("number");
// if (isExist) {
//   showNum.textContent = `Local Storage Number: ${isExist}`;
// }

// numBtn.addEventListener("click", () => {
//   let numVal = inputNum.value;
//   localStorage.setItem("number", numVal);
//   const getNum = localStorage.getItem("number");
//   showNum.textContent = getNum;
// });

// Mini Challenge day 12 and 13
let currentCar = document.getElementById("carImg");
let carName = document.getElementById("carName");
let originalCar = true;

const skylineUrl =
  "https://wallpapers-clan.com/wp-content/uploads/2025/07/jdm-fast-and-furious-desktop-wallpaper-preview.jpg";
const porsheUrl =
  "https://wallpapers-clan.com/wp-content/uploads/2025/06/red-porsche-speed-style-fast-drive-desktop-wallpaper-cover-768x432.jpg";

carName.textContent = "Nissan Skyline GTR R32";

const savedCar = localStorage.getItem("currentCar"); // get the savedCar (if exists) from the localStorage
const savedName = localStorage.getItem("carName"); // get the car name (if exists) from the localStorage
if (savedCar && savedName) {
  currentCar.src = savedCar; // shows the currentCar as the savedCar (if exists) from localStorage
  carName.textContent = savedName; // same for the name
  originalCar = savedCar === skylineUrl; // if it not exists from localStorage, fallback to Porsche
}

currentCar.addEventListener("click", () => {
  if (originalCar) {
    currentCar.src = porsheUrl; // changes the currentCar to Porsche
    carName.textContent = "Porsche Cayman 718 GT4"; // changes the car name to porsche
    localStorage.setItem("currentCar", currentCar.src); // saves the currentCar and carName to localStorage(key, value) which was Porsche
    localStorage.setItem("carName", carName.textContent); // same as the currentCar
  } else {
    currentCar.src = skylineUrl; // else fallback to Nissan
    carName.textContent = "Nissan GTR R32 Skyline"; // fallback
    localStorage.setItem("currentCar", currentCar.src); // set the currentCar to default
    localStorage.setItem("carName", carName.textContent); // set the car name to default
  }
  originalCar = !originalCar; // makes the originalCar false
});

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  // this function clears the localStorage and fallback to default and resets the originalCar to true
  localStorage.clear(); // clears the localStorage
  currentCar.src = skylineUrl;
  carName.textContent = "Nissan Skyline GTR R32";
  originalCar = true;
});
