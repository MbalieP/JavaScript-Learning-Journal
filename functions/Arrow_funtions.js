// Arrow functions = a concise way to write function expressions.
// They are particularly useful for simple functions that are often used as callbacks.
// Syntax: (parameters) => { /* some code */ }
// If the function body contains a single expression, you can omit the braces and the return keyword.


// ---------- EXAMPLE 1 ----------
const hello = (name, age) => {
    console.log(`Hello ${name}`); // Outputs a greeting with the name
    console.log(`You are ${age} years old`); // Outputs the age
};

hello("Bro", 25); // Invokes the hello function with arguments "Bro" and 25

// ---------- EXAMPLE 2 ----------
setTimeout(() => {
    console.log("Hello"); // Outputs "Hello" after 3 seconds
    console.log("Goodbye"); // Outputs "Goodbye" after 3 seconds
}, 3000); // Delay time in milliseconds

// ---------- EXAMPLE 3 ----------
const numbers = [1, 2, 3, 4, 5, 6]; // An array of numbers

// Using arrow functions to calculate squares of the numbers
const squares = numbers.map((element) => Math.pow(element, 2)); // Returns an array of squared numbers
// Using arrow functions to calculate cubes of the numbers
const cubes = numbers.map((element) => Math.pow(element, 3)); // Returns an array of cubed numbers
// Using arrow functions to filter even numbers
const evenNums = numbers.filter((element) => element % 2 === 0); // Returns an array of even numbers
// Using arrow functions to filter odd numbers
const oddNums = numbers.filter((element) => element % 2 !== 0); // Returns an array of odd numbers
// Using arrow functions to calculate the total sum of the numbers
const total = numbers.reduce((accumulator, element) => accumulator + element); // Returns the sum of all numbers

console.log(`Total: ${total}`); // Outputs the total sum of the numbers

// ---------- ADDITIONAL EXAMPLE ----------
const fruits = ['apple', 'banana', 'cherry', 'date']; // An array of fruits

// Using an arrow function to convert all fruit names to uppercase
const uppercasedFruits = fruits.map((element) => element.toUpperCase()); // Returns an array of uppercase fruit names

console.log(uppercasedFruits); // Outputs: ['APPLE', 'BANANA', 'CHERRY', 'DATE']

// ---------- ADDITIONAL EXAMPLE 2 ----------
const mixedArray = [1, 'two', 3, 'four', 5]; // An array with mixed data types

// Using an arrow function to filter out only numbers
const numbersOnly = mixedArray.filter((element) => typeof element === 'number'); // Returns an array of numbers

console.log(numbersOnly); // Outputs: [1, 3, 5]

/*
Additional Notes:
- Arrow functions do not have their own 'this' context; they inherit 'this' from the enclosing lexical context.
- This makes them particularly useful for methods that need to maintain the context of 'this', especially in callbacks.
- Arrow functions cannot be used as constructors and do not have the 'arguments' object.
- They provide a more concise syntax, especially for short functions, improving code readability.
- Arrow functions are ideal for functional programming patterns, such as map, filter, and reduce.
*/
