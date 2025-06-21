// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element.

// The syntax is: array.forEach(callback(element, index, array))
// - callback: a function that is executed for each element
// - element: the current element being processed
// - index: the index of the current element
// - array: the array that forEach() was called upon

// -------------- EXAMPLE 1 --------------

const numbers = [1, 2, 3, 4, 5]; // An array of numbers

// Calling the cube function for each element in the numbers array
numbers.forEach(cube); // This will modify the original array to contain cubes of the numbers
// Calling the display function to print each element in the numbers array
numbers.forEach(display); // Outputs each number to the console

// Function to double the value of each element
function double(element, index, array) {
    array[index] = element * 2; // Modify the array in place
}

// Function to triple the value of each element
function triple(element, index, array) {
    array[index] = element * 3; // Modify the array in place
}

// Function to square each element
function square(element, index, array) {
    array[index] = Math.pow(element, 2); // Modify the array in place
}

// Function to cube each element
function cube(element, index, array) {
    array[index] = Math.pow(element, 3); // Modify the array in place
}

// Function to display each element in the console
function display(element) {
    console.log(element); // Outputs the current element
}

// -------------- EXAMPLE 2 --------------

let fruits = ["apple", "orange", "banana", "coconut"]; // An array of fruit names

// Calling the capitalize function for each element in the fruits array
fruits.forEach(capitalize); // Capitalizes each fruit name in the array
// Calling the display function to print each element in the fruits array
fruits.forEach(display); // Outputs each fruit name to the console

// Function to convert each element to uppercase
function upperCase(element, index, array) {
    array[index] = element.toUpperCase(); // Modify the array in place
}

// Function to convert each element to lowercase
function lowercase(element, index, array) {
    array[index] = element.toLowerCase(); // Modify the array in place
}

// Function to capitalize the first letter of each element
function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); // Modify the array in place
}

/*
Note: The display function is commented out here, but it can be used to print elements
function display(element){
    console.log(element);
}
*/

// Additional Notes:
// - forEach() does not return a new array; it modifies the original array if the callback function does.
// - It is often used when you need to perform side effects (like logging to the console) rather than creating a new array.
// - You cannot break or return from a forEach loop using break or return statements; to stop execution, consider using a regular for loop or for..of loop.
