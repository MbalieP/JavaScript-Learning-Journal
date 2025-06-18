// The ternary operator provides a shorthand way to write conditional statements in JavaScript.
// It is particularly useful for assigning values based on a condition.
// The syntax is: condition ? expressionIfTrue : expressionIfFalse;

let time = 9;

// Using the ternary operator to determine the greeting based on the time of day.
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// If time is less than 12, greeting will be "Good morning!", otherwise it will be "Good afternoon!".
console.log(greeting); // Outputs: "Good morning!"

// Checking if a user is a student
let isStudent = false;

// Assign a message based on whether isStudent is true or false
let message = isStudent ? "You are a student" : "You are NOT a student";
// If isStudent is true, message will be "You are a student", otherwise "You are NOT a student".
console.log(message); // Outputs: "You are NOT a student"

// Calculating the discount on a purchase based on the amount
let purchaseAmount = 99;

// Determine discount based on the purchase amount
let discount = purchaseAmount >= 100 ? 10 : 0;
// If purchaseAmount is 100 or more, discount will be 10%. Otherwise, it will be 0%.
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
// Outputs: "Your total is $99" because the discount is 0%
