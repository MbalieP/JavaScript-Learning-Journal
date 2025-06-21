// Function expressions = a way to define functions as values or variables.
// They can be assigned to variables, passed as arguments, or returned from other functions.

// Function expressions are often used when working with higher-order functions 
// like map(), filter(), and reduce() that accept a function as an argument.

const numbers = [1, 2, 3, 4, 5, 6]; // An array of numbers

// Using a function expression to calculate the squares of the numbers
const squares = numbers.map(function(element) {
    return Math.pow(element, 2); // Returns the square of the element
});

// Using a function expression to calculate the cubes of the numbers
const cubes = numbers.map(function(element) {
    return Math.pow(element, 3); // Returns the cube of the element
});

// Using a function expression to filter out even numbers
const evenNums = numbers.filter(function(element) {
    return element % 2 === 0; // Returns true if the element is even
});

// Using a function expression to filter out odd numbers
const oddNums = numbers.filter(function(element) {
    return element % 2 !== 0; // Returns true if the element is odd
});

// Using a function expression to calculate the total sum of the numbers
const total = numbers.reduce(function(accumulator, element) {
    return accumulator + element; // Adds the current element to the accumulator
});

// Output the total sum of the numbers
console.log(total); // Outputs: 21

// ----------- ADDITIONAL EXAMPLE -----------
const fruits = ['apple', 'banana', 'cherry', 'date']; // An array of fruits

// Using a function expression to convert all fruit names to uppercase
const uppercasedFruits = fruits.map(function(element) {
    return element.toUpperCase(); // Returns the fruit name in uppercase
});

console.log(uppercasedFruits); // Outputs: ['APPLE', 'BANANA', 'CHERRY', 'DATE']

// ----------- ADDITIONAL EXAMPLE 2 -----------
const mixedArray = [1, 'two', 3, 'four', 5]; // An array with mixed data types

// Using a function expression to filter out only numbers
const numbersOnly = mixedArray.filter(function(element) {
    return typeof element === 'number'; // Returns true if the element is a number
});

console.log(numbersOnly); // Outputs: [1, 3, 5]

/*
Additional Notes:
- Function expressions can be anonymous (as shown in the examples) or named.
- They are not hoisted, meaning you cannot use them before they are declared.
- Function expressions provide flexibility and are commonly used in callback functions.
- You can also use arrow functions for a more concise syntax, e.g., 
  numbers.map(element => Math.pow(element, 2));
- Function expressions can help in creating closures, which can be useful for maintaining state in certain contexts.
*/
