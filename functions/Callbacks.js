// A callback is a function that is passed as an argument to another function.
// Callbacks are commonly used to handle asynchronous operations.
// Examples of asynchronous operations include:
// 1. Reading a file
// 2. Making network requests (e.g., API calls)
// 3. Interacting with databases

// The purpose of callbacks is to allow code to execute in a specific order.
// For instance, we can say, "Hey, when you're done, call this next."

// Here, we call the `hello` function and pass the `goodbye` function as a callback.
hello(goodbye);

// The `hello` function takes a callback function as an argument.
function hello(callback) {
    console.log("Hello!"); // This line executes first.
    callback(); // Once the greeting is complete, the callback (goodbye) is called.
}

// The `goodbye` function is defined to print a farewell message.
function goodbye() {
    console.log("Goodbye!"); // This line executes after the hello function is finished.
}

// Example of using a callback with asynchronous behavior
// Simulating an asynchronous operation using setTimeout
function fetchData(callback) {
    console.log("Fetching data..."); // Indicate that data fetching is starting
    setTimeout(() => {
        console.log("Data fetched!"); // Simulate data fetching completion
        callback(); // Call the callback function after data is fetched
    }, 2000); // Simulate a delay of 2 seconds
}

// Example callback function to execute after data is fetched
function processData() {
    console.log("Processing data..."); // This will run after data fetching
}

// Call fetchData and pass processData as the callback
fetchData(processData);
