// Function: A reusable section of code that performs a specific task.
// Functions allow you to declare code once and call it whenever needed,
// promoting code reusability and organization.

// Function to print a birthday message
function happyBirthday(username, age) {
    console.log(`Happy birthday to you!`); // Prints the first line of the birthday song
    console.log(`Happy birthday to you!`); // Prints the second line of the birthday song
    console.log(`Happy birthday dear, ${username}`); // Personalizes the song with the username
    console.log(`Happy birthday to you!`); // Prints the final line of the birthday song
    console.log(`You are ${age} years old!`); // Displays the age of the person celebrating their birthday
}

// Function to add two numbers and return the result
function add(x, y) {
    return x + y; // Returns the sum of x and y
}

// Function to subtract the second number from the first and return the result
function subtract(x, y) {
    return x - y; // Returns the difference between x and y
}

// Function to multiply two numbers and return the result
function multiply(x, y) {
    return x * y; // Returns the product of x and y
}

// Function to divide the first number by the second and return the result
function divide(x, y) {
    return x / y; // Returns the quotient of x and y
}

// Function to check if a number is even
function isEven(number) {
    // The modulo operator (%) returns the remainder of the division
    // If the remainder is 0, the number is even
    return number % 2 === 0 ? true : false; // Returns true if even, false if odd
}

// Function to validate an email address format
function isValidEmail(email) {
    // Checks if the email contains an "@" symbol
    return email.includes("@") ? true : false; // Returns true if valid, false if not
}

// Calling the happyBirthday function with parameters
console.log(happyBirthday("mbali", 25)); // Outputs the birthday message for "BroCode" aged 25

// Calling the isValidEmail function to validate an email address
console.log(isValidEmail("Mbali@gmail.com")); // Outputs true if the email is valid
