// filter() = a method that creates a new array by filtering out elements based on a callback function.
// The callback should return true for elements that should be included in the new array,
// and false for those that should be excluded.

// ----------- EXAMPLE 1 -----------
let numbers = [1, 2, 3, 4, 5, 6, 7]; // An array of numbers

// Filtering even numbers using the isEven function
let evenNums = numbers.filter(isEven); // Creates a new array with even numbers
// Filtering odd numbers using the isOdd function
let oddNums = numbers.filter(isOdd); // Creates a new array with odd numbers

console.log(oddNums); // Outputs the array of odd numbers

// Function to check if a number is even
function isEven(element) {
    return element % 2 === 0; // Returns true if the element is even
}

// Function to check if a number is odd
function isOdd(element) {
    return element % 2 !== 0; // Returns true if the element is odd
}

// ----------- EXAMPLE 2 -----------
let ages = [16, 17, 17, 18, 19, 20, 65]; // An array of ages

// Filtering adults (18 and older) using the isAdult function
let adults = ages.filter(isAdult); // Creates a new array with adult ages
// Filtering children (under 18) using the isChild function
let children = ages.filter(isChild); // Creates a new array with child ages

console.log(children); // Outputs the array of children

// Function to check if an age represents an adult
function isAdult(element) {
    return element >= 18; // Returns true if the age is 18 or older
}

// Function to check if an age represents a child
function isChild(element) {
    return element < 18; // Returns true if the age is under 18
}

// ----------- EXAMPLE 3 -----------
const words = ['apple', 'orange', 'kiwi', 'banana', 'pomegranate', 'coconut']; // An array of words

// Filtering long words (more than 6 letters) using the getLongWords function
const longWords = words.filter(getLongWords); // Creates a new array with long words
// Filtering short words (6 letters or fewer) using the getShortWords function
const shortWords = words.filter(getShortWords); // Creates a new array with short words

console.log(shortWords); // Outputs the array of short words

// Function to check if a word is short (6 letters or fewer)
function getShortWords(element) {
    return element.length <= 6; // Returns true if the word length is 6 or fewer
}

// Function to check if a word is long (more than 6 letters)
function getLongWords(element) {
    return element.length > 6; // Returns true if the word length is greater than 6
}

// ----------- ADDITIONAL EXAMPLE -----------
const mixedArray = [1, 'two', 3, 'four', 5, 'six', 7]; // An array with mixed data types

// Filtering numbers from the mixed array
const numbersOnly = mixedArray.filter(isNumber); // Creates a new array with only numbers

console.log(numbersOnly); // Outputs the array of numbers

// Function to check if an element is a number
function isNumber(element) {
    return typeof element === 'number'; // Returns true if the element is a number
}

/*
Additional Notes:
- The filter() method does not modify the original array; it returns a new array.
- The callback function can accept three parameters: the current element, its index, and the original array itself.
- Filtered arrays can be used for further operations, such as mapping or reducing.
- If no elements pass the test, an empty array is returned.
- You can chain filter() with other array methods for more complex operations.
*/
