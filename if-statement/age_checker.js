// The if statement is a fundamental aspect of decision-making in programming. 
// It evaluates a condition and executes a block of code if the condition is true. 
// If the condition is false, it can execute an alternative block of code using else or else if.

let age = 65;

// Check if the person is a senior citizen
if (age >= 65) {
    console.log("You are a senior citizen");
}
// Check if the person is an adult
else if (age >= 18) {
    console.log("You are an adult");
}
// Check if the person is a child (not yet born)
else if (age > 0) {
    console.log("You are a child");
}
// This is the fallback case when age is 0 or negative
else {
    console.log("You haven't been born yet");
}

// Example of a boolean variable to check online status
let online = false;

// Evaluate the online status
if (online) {
    console.log("You are online");
} else {
    console.log("You are offline");
}
