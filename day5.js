// Day 5 — Loops (for, while)
// Goal: Repeat actions using loops.
//     Challenge 1: Print numbers from 1 to 10.
//     Challenge 2: Print even numbers from 2 to 20.
//     Challenge 3: Count down from 10 to 1.

// Challenge 1
// NOTE: i <= 10, so it will be strictly equals to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Count: ${i}`);
}

// Challenge 2
for (let i = 2; i <= 20; i += 2) {
  console.log(`Count: ${i}`);
}

// Challenge 3
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// While Loop challenge
// Print numbers from 1 to 5 using a while loop
let num = 1;
while (num <= 5) {
  console.log(`Number: ${num}`);
  num++;
}

// Do while challenge
// Ask the loop to print "Looping..." exactly 3 times using a do…while loop.
let i = 1;
do {
  console.log("Looping...");
  i++;
} while (i <= 3);

// Mini Challenge
// Using a while loop, keep dividing it by 2 until the number is less than 1.
// Print the number at each step.
let a = 10;
while (a >= 1) {
  console.log(a);
  a /= 2;
}

// Last Mini Challenge
// Create a do...while loop that:
// Starts with a number n = 50
// Keeps dividing n by 3
// Logs the value each time
// Stops when n becomes less than 1
// Remember — in a do...while, the code runs at least once, even if the condition is false right away.
let n = 50;
do {
  n /= 3;
  console.log(`Do: ${n}`);
} while (n >= 1);

// LAST LAST LAST
// 💪 Challenge:
// Write code that:
// Uses a for loop to print numbers from 1 to 5.
// Uses a while loop to count down from 5 to 1.
// Uses a do...while loop to print "Done!" exactly 3 times.

for (let o = 1; o <= 5; o++) {
  console.log(`O: ${o}`);
}

let q = 5;
while (q >= 1) {
  console.log(`Q: ${q}`);
  q--;
}

let z = 1;
do {
  console.log(`Done!`);
  z++;
} while (z <= 3);

// FUCKING BONUS ROUND!
// Print numbers from 1 to 20 using a single loop, but…
// If the number is divisible by 3, print "Fizz".
// If it’s divisible by 5, print "Buzz".
// If divisible by both, print "FizzBuzz" instead of the number.

for (let x = 1; x <= 20; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log(`${x} FizzBuzz`);
  } else if (x % 3 === 0) {
    console.log(`${x} Fizz`);
  } else if (x % 5 === 0) {
    console.log(`${x} Buzz`);
  } else {
    console.log(`${x} not divisible by 3 and 5`);
  }
}
