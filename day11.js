// Day 11 — DOM Basics
// Goal: Change HTML with JavaScript.
//     Challenge 1: Select an element by ID and change its text.
//     Challenge 2: Change the background color of the page.
//     Challenge 3: Create a button that changes text when clicked.

// Challenge 1
// const changeText = document.getElementById("myH1");
// changeText.textContent = "Hello World";
// changeText.style.color = "white";

// // Challlenge 2
// const body = document.body;
// body.style.backgroundColor = "navy";

// // Challenge 3
// // create button element using createElement()
// const button = document.createElement("button");

// // Set button text value
// button.textContent = "Click Me!";

// // Button when it clicks
// button.addEventListener("click", function () {
//   changeText.textContent = "Fuck You BITCH!";
// });

// // add the button element to the body
// document.body.appendChild(button);

// const backgroundButton = document.createElement("backgroundBtn");
// backgroundButton.textContent = "Hover me daddy!";
// backgroundButton.style.backgroundColor = "white";
// backgroundButton.style.color = "black";

// backgroundButton.addEventListener("mouseenter", function () {
//   body.style.backgroundColor = "black";
// });

// backgroundButton.addEventListener("mouseleave", function () {
//   body.style.backgroundColor = "navy";
// });

// document.body.appendChild(backgroundButton);

// // Mini Challenge
// // Create an interactive profile card that allows users to:
// // Change the profile name
// // Toggle between light/dark mode
// // Update profile information dynamically
// // Add skills through a form

// // Tasks:
// // Select the profile card by ID and change its initial styles
// // Implement the dark/light mode toggle that changes background and text colors
// // Create a function that adds new skills to the list when the form is submitted
// // Add an event to the profile name that allows editing when clicked

// const body = document.body; // get's the body tag
// body.style.backgroundColor = "lightgray"; // changes the body background color
// const profileCard = document.getElementById("profile-card"); // get's the profile card container
// profileCard.style.backgroundColor = "gray"; // changes the profile card backround color

// const darkMode = document.getElementById("mode-toggle"); // gets the button element
// darkMode.addEventListener("click", function () {
//   // to make the button work by "clicking"
//   body.style.backgroundColor =
//     body.style.backgroundColor === "black" ? "lightgray" : "black"; // changes the background color of the body
//   body.style.color = "white"; // changes the text color
// });

// const skillsList = document.getElementById("skills-list"); // gets the ul skills
// const skillForm = document.getElementById("add-skill-form"); // getrs the form
// const skillInput = document.getElementById("skill-input"); // gets the input
// const skills = []; // empty array for pushing skills

// skillForm.addEventListener("submit", (e) => {
//   // for the new skills to be add
//   e.preventDefault(); // to prevent refreshing of page
//   const skillValue = skillInput.value.trim(); // gets the value of skillInput

//   if (skillValue.trim() !== "") {
//     // If skill is empty, add/push the skill input value
//     skills.push(skillValue); // add/push the skill input value

//     skillsList.innerHTML = ""; // clears the list of skills to prevent duplicates
//     skills.forEach((skill) => {
//       // forEach, iterate on skills array
//       const skillItem = document.createElement("li"); // create new li element
//       skillItem.textContent = skill; // the the text content of li elements to skills value
//       skillsList.appendChild(skillItem); // add the li element to the html
//     });

//     skillInput.value = ""; // clears the input
//   }
// });

// const profileName = document.getElementById("profile-name"); // gets the profile name
// profileName.addEventListener("click", () => {
//   // for the profile name to be editable
//   const input = document.createElement("input"); // after clicking the profile name, a new input will show
//   input.type = "text";
//   input.value = profileName.textContent; // get's the input's name value

//   profileName.replaceWith(input); // replace the default profile name with the new input value
//   input.focus(); // focus on the input

//   function saveName() {
//     // to save the new Profile Name
//     const newName = input.value.trim() || "Unamed User"; // if no value from the input name, fallback to Unamed user
//     profileName.textContent = newName; // set the text content of the Profile name to the new Profile name
//     input.replaceWith(profileName); // replace the old name with the new name
//   }

//   input.addEventListener("blur", saveName); // save name
//   input.addEventListener("keydown", (e) => {
//     // after pressing the enter key, the new name will be saved and shown
//     if (e.key === "Enter") saveName();
//   });
// });

// Day 10 and 11 challenge
// Tasks
// Data structure:
// 1. Create an object for your profile with keys like name, description, and skills (skills should start as an array).
// Example structure:

// const profile = {
//   name: "Aeryun Clay Caluscos",
//   description: "This is my profile description.",
//   skills: ["JavaScript", "HTML"]
// };

const userProfile = {
  name: "Aeryun Clay Caluscos",
  description: "A youthful nigga!",
  skills: ["HTML", "CSS", "JS", "GAMING"],
};

// 2. DOM sync:
// When the page loads, display profile.name, profile.description, and each item in profile.skills inside the card.
const body = document.body;
const profileName = document.getElementById("profile-name");
const profileDesc = document.getElementById("profile-desc");
const skillsList = document.getElementById("skills-list");
profileName.textContent = userProfile.name;
profileDesc.textContent = userProfile.description;

// 3. Editable name:
// Clicking on the name lets you edit it. After editing, update both the DOM and the profile object.
profileName.addEventListener("click", () => {
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = profileName.textContent;
  profileName.replaceWith(nameInput);
  nameInput.focus();

  const editName = () => {
    const newName = nameInput.value.trim() || "No Name";
    profileName.textContent = newName;
    nameInput.replaceWith(profileName);
  };

  nameInput.addEventListener("blur", editName);
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") editName();
  });
});

// 4.Dark mode toggle:
// Use a button to switch between light and dark mode.
const darkMode = document.getElementById("mode-toggle");
darkMode.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});

// 5. Add new skills (Day 10 + 11 combo):
// Use the input + button to add new skills.
// Update both the skills array inside profile and the skills list in the DOM.

const skillForm = document.getElementById("add-skill-form");
const skillInput = document.getElementById("skill-input");

function renderSkills() {
  skillsList.innerHTML = "";
  userProfile.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill.toUpperCase();
    skillsList.appendChild(li);
  });
}

renderSkills();

skillForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const skillValue = skillInput.value.trim();

  if (skillValue) {
    userProfile.skills.push(skillValue);
    renderSkills();
    skillInput.value = "";
  }
});
