
// While loop: Repeats a block of code as long as a specified condition is true

let loggedIn = false; // Variable to track the login status
let username; // Variable to store the input username
let password; // Variable to store the input password

// Start of the while loop
while (!loggedIn) { // Continue looping until loggedIn is true
    // Prompt the user to enter their username
    username = window.prompt(`Enter your username`);
    // Prompt the user to enter their password
    password = window.prompt(`Enter your password`);

    // Check if the entered username and password are correct
    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true; // Set loggedIn to true to exit the loop
        console.log("You are logged in!"); // Confirmation message
    } else {
        console.log("Invalid credentials! Please try again"); // Error message for invalid input
    }
}

// Additional Information:
// - The while loop checks the condition before executing the code inside the loop.
// - If the user inputs the correct credentials, they will be logged in; otherwise, they will be prompted again.

// ---------- DO WHILE LOOP EXAMPLE ----------

// Resetting loggedIn for demonstration of do...while loop
loggedIn = false;

// Start of the do...while loop
do {
    // Prompt the user to enter their username
    username = window.prompt(`Enter your username`);
    // Prompt the user to enter their password
    password = window.prompt(`Enter your password`);

    // Check if the entered username and password are correct
    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true; // Set loggedIn to true to exit the loop
        console.log("You are logged in!"); // Confirmation message
    } else {
        console.log("Invalid credentials! Please try again"); // Error message for invalid input
    }
} while (!loggedIn); // Continue looping until loggedIn is true

// Additional Information on do...while loop:
// - The do...while loop will execute the code block at least once, even if the condition is false initially.
// - This is useful when you want to ensure that the code runs before checking the condition.
