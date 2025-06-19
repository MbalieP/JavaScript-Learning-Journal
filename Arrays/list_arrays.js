// Array: A variable-like structure that can hold more than one value.
// Arrays are used to store multiple values in a single variable.

let fruits = ["apple", "orange", "banana", "coconut"]; // Initialize an array with four fruit names

// Add an element to the end of the array
fruits.push("coconut"); // Now the array is ["apple", "orange", "banana", "coconut", "coconut"]

// Remove the last element from the array
fruits.pop(); // Now the array is ["apple", "orange", "banana", "coconut"]

// Add an element to the beginning of the array
fruits.unshift("mango"); // Now the array is ["mango", "apple", "orange", "banana", "coconut"]

// Remove the first element from the array
fruits.shift(); // Now the array is ["apple", "orange", "banana", "coconut"]

// Get the number of elements in the array
let numOfFruits = fruits.length; // numOfFruits will be 4

// Find the index of a specific element in the array
let index = fruits.indexOf("coconut"); // index will be 3 (the position of "coconut")

// Log the entire array to the console
console.log(fruits); // Outputs: ["apple", "orange", "banana", "coconut"]

// Log individual elements of the array
console.log(fruits[0]); // Outputs: "apple"
console.log(fruits[1]); // Outputs: "orange"
console.log(fruits[2]); // Outputs: "banana"
// The following line may result in undefined since there are only 4 elements
console.log(fruits[3]); // Outputs: "coconut"

// Log the number of fruits and the index of "coconut"
console.log(numOfFruits); // Outputs: 4
console.log(index); // Outputs: 3

// Loop through the array from the beginning to the end
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Outputs each fruit in order: apple, orange, banana, coconut
}

// Loop through the array from the end to the beginning
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]); // Outputs each fruit in reverse order: coconut, banana, orange, apple
}

// Sort the array alphabetically
fruits.sort(); // Now the array is sorted: ["apple", "banana", "coconut", "orange"]

// Sort the array and then reverse it (to get descending order)
fruits.sort().reverse(); // Now the array is: ["orange", "coconut", "banana", "apple"]

// Use a for...of loop to iterate over each fruit in the array
for (let fruit of fruits) {
    console.log(fruit); // Outputs each fruit in the current order
}
