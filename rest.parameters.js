// ✅ REST PARAMETERS vs. SPREAD OPERATOR

// Rest parameters: `...rest` collects multiple individual arguments into a single array.
// Spread operator: `...spread` expands an array (or iterable) into individual elements.

// Use REST when defining a function — to accept any number of arguments.
// Use SPREAD when calling a function — to pass elements from an array.

// ⏱️ 00:00:00 — EXAMPLE 1: Collecting multiple food items into a rest parameter

function openFridge(...foods) {
    // Uses the SPREAD operator inside console.log to print individual items
    console.log(...foods);
}

function getFood(...foods) {
    // REST parameter collects all arguments into an array called 'foods'
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// Pass multiple arguments to the function
openFridge(food1, food2, food3, food4, food5);  
// Output: pizza hamburger hotdog sushi ramen

const foods = getFood(food1, food2, food3, food4, food5);
console.log("Foods array:", foods);
// Output: ["pizza", "hamburger", "hotdog", "sushi", "ramen"]

// ⏱️ 00:03:52 — EXAMPLE 2: Summing and averaging any number of values

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

// Automatically handles any number of inputs
const average = getAverage(75, 100, 85, 90, 50);
console.log("Average score:", average);
// Output: Average score: 80

// ⏱️ 00:06:07 — EXAMPLE 3: Combine multiple strings into one

function combineStrings(...strings) {
    // Join all strings with a space between them
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log("Full name:", fullName);
// Output: Full name: Mr. Spongebob Squarepants III
