/*
What number's bigger?

Write an if statement that compares two numbers (call them numOne and numTwo).

If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".

If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".

If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".
*/

let numOne = 18;
let numTwo = 72;

if (numOne > numTwo) {
  console.log(numOne + " is bigger than " + numTwo);
} else if (numOne < numTwo) {
  console.log(numOne + " is smaller than " + numTwo);
} else {
  console.log(numOne + " is equal than " + numTwo);
}

/* 
Driving Age
Store the user's name and age.

If the age is less than 16, log "Sorry, you can't drive yet!"
If the age is greater than or equal to 16, log "Drive into the sunset!"
Bonus: Get the name and age using prompt!

Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")
*/

let name = prompt("Please enter your name:");
let age = parseInt(prompt("Please enter your age:", ""));

let ageCalculation = 16 - age;

if (age < 16) {
  console.log(
    "Sorry " +
      name +
      "," +
      " you still have " +
      ageCalculation +
      " years before you can drive!"
  );
} else if (age >= 16) {
  console.log("Drive into the sunset!");
}
