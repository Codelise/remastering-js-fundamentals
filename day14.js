// Day 14 — Mini Project
// Goal: Combine everything.
// Build: A “Favorite Quotes” app
// Input for quote text
// Button to add the quote to a list
// Store quotes in localStorage so they stay after refresh
// Display all saved quotes

const body = document.body;
const heading = document.getElementById("heading");
const darkBtn = document.getElementById("darkBtn");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const displayQuotes = document.getElementById("quotesContainer");

let quotesList = JSON.parse(localStorage.getItem("quotes")) || []; // gets the saved quotes on the quotesList

addQuoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const quoteInput = document.getElementById("quoteInput");

  if (quoteInput.value.trim() !== "") {
    quotesList.push(quoteInput.value.trim()); // push the input's value to the quotesList array
    localStorage.setItem("quotes", JSON.stringify(quotesList)); // saves the quotesList value to localStorage
    quoteInput.value = ""; // clears the input field
    showQuotes(); // calls the showQuotes function to render the quotes
  }
});

const showQuotes = () => {
  displayQuotes.innerHTML = ""; // clears before re-rendering the quotes
  quotesList.forEach((quote, index) => {
    // quote -> quotes, index -> quote removal on quoteList items
    const card = document.createElement("div"); // creates a new element div
    card.classList.add("quote-card"); // gives the div a classList/class

    const p = document.createElement("p"); // creates a p element
    p.textContent = quote; // set's the p element's text to the quotes

    const removeQuoteBtn = document.createElement("button"); // creates button to remove a quote
    removeQuoteBtn.textContent = "Remove";
    removeQuoteBtn.addEventListener("click", () => {
      quotesList.splice(index, 1); // remove the single quote on quotesList
      localStorage.setItem("quotes", JSON.stringify(quotesList)); // saved the remove quotes to localStorage
      showQuotes(); // re-render the quotes now without the removed quote
    });

    card.appendChild(p); // adds the created p element to the body
    card.appendChild(removeQuoteBtn); // same as the p element
    displayQuotes.appendChild(card); // same
  });
};

showQuotes(); // calls the showQuotes function to render/show the quotes

let savedTheme = localStorage.getItem("theme"); // checks the current saved theme wether light or dark

if (savedTheme === "dark") {
  applyDarkTheme(); // calls the dark theme
}

darkBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    // if the body is dark, it will be remove and fallback to light
    body.classList.remove("dark");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    heading.style.color = "black";
    localStorage.setItem("theme", "light"); // save to localStorage as light theme
  } else {
    // else if the body is light, dark theme would be applied
    applyDarkTheme(); // calles the applyDarkTheme function to apply dark theme
    localStorage.setItem("theme", "dark"); // save to localStorage as darkTheme
  }
});

function applyDarkTheme() {
  // function to apply darkTheme
  body.classList.add("dark");
  body.style.backgroundColor = "black";
  body.style.color = "white";
  heading.style.color = "white";
  localStorage.setItem("theme", "dark"); // saves the dark theme to localStorage
}
