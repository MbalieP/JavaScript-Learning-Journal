// Variable scope: Refers to the context in which a variable is recognized and accessible.
// There are two main types of scope: local and global.

// Global scope: Variables defined outside of any function can be accessed anywhere in the code.
let x = 3; // This variable x is in the global scope

// Call the first function to demonstrate scope
function1(); // This will log the local x from function1

// Function declaration for function1
function function1() {
    // Local scope: Variables defined within a function are only accessible within that function
    let x = 1; // This variable x is in the local scope of function1
    console.log(x); // Logs the local x, which is 1
}

// Function declaration for function2
function function2() {
    let x = 2; // This variable x is in the local scope of function2
    console.log(x); // Logs the local x, which is 2
}

// Notes on Scope:
// - When function1 is called, it creates its own local scope. 
// - The local variable x in function1 shadows the global variable x.
// - Therefore, when console.log(x) is executed inside function1, it refers to the local x (1), not the global x (3).

// To demonstrate function2, you can call it like this:
// function2(); // Uncommenting this line would log 2, the local x from function2
