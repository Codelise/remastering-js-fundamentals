// Day 12 — Events
// Goal: Make interactive pages.
//     Challenge 1: Create a button that shows an alert when clicked.
//     Challenge 2: Show a message when the user types in an input.
//     Challenge 3: Change an image when the mouse hovers over it.

// Challenge 1
const body = document.body;
const alertBtn = document.createElement("button");
alertBtn.textContent = "Alert!";

alertBtn.addEventListener("click", () => {
  window.alert("Alert! Alert! Alert!"); // window.alert to make alert notifications
});

document.body.appendChild(alertBtn);

// Challenge 2
const inputType = document.getElementById("myInput");
const message = document.getElementById("message");
const charName = document.getElementById("charName");
charName.textContent = "Hatake Kakashi";

inputType.addEventListener("input", (event) => {
  // input event listener
  message.textContent = event.target.value; // event.target.value to show the value form the input
});

// Challenge 3
const hoverImage = document.getElementById("changeImage");
const originalImage = hoverImage.src; // the default image
hoverImage.addEventListener("mouseenter", () => {
  // mouseenter when you hover the cursor
  hoverImage.src =
    "https://wallpapers-clan.com/wp-content/uploads/2025/07/naruto-sasuke-uchiha-sharingan-gaze-desktop-wallpaper-cover.jpg";
  charName.textContent = "Uchiha Sasuke";
});

hoverImage.addEventListener("mouseleave", () => {
  // mouseleave when you get out the cursor
  hoverImage.src = originalImage;
  charName.textContent = "Hatake Kakashi";
});

// Mini Challenge
// Here’s a mini challenge to stretch what you just learned:
// ➡️ Make the image swap when you click it instead of hover.
// The first click changes it to Sasuke.
// The second click changes it back to the original.
// Keep toggling like that with every click.

const clickCar = document.getElementById("clickImg");
const carName = document.getElementById("carName");
let originalCar = true;
const skylineUrl =
  "https://wallpapers-clan.com/wp-content/uploads/2025/07/jdm-fast-and-furious-desktop-wallpaper-preview.jpg";
const porsheUrl =
  "https://wallpapers-clan.com/wp-content/uploads/2025/06/red-porsche-speed-style-fast-drive-desktop-wallpaper-cover-768x432.jpg";

carName.textContent = "Nissan GTR R32 Skyline";

clickCar.addEventListener("click", () => {
  if (originalCar) {
    clickCar.src = porsheUrl;
    carName.textContent = "Porsche Cayman 718 GT4";
  } else {
    clickCar.src = skylineUrl;
    carName.textContent = "Nissan GTR R32 Skyline";
  }
  originalCar = !originalCar;
});
