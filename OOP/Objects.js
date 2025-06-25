// Object: A collection of related properties and/or methods
// It can represent real-world objects (e.g., people, products, places)
// Objects are defined using curly braces `{}` and can contain key-value pairs
// Example of an object structure:
// object = { key: value, method: function() { /* code */ } }

// Creating an object representing a person named Spongebob
const person1 = {
    firstName: "Spongebob", // A property representing the person's first name
    lastName: "Squarepants", // A property representing the person's last name
    age: 30, // A property representing the person's age
    isEmployed: true, // A boolean property indicating employment status
    // A method that logs a greeting message to the console
    sayHello: function() {
        console.log("Hi! I am Spongebob!");
    },
    // A method that logs a message about eating to the console
    eat: function() {
        console.log("I am eating a Krabby Patty");
    }
};

// Creating another object representing a person named Patrick
const person2 = {
    firstName: "Patrick", // Property for first name
    lastName: "Star", // Property for last name
    age: 42, // Property for age
    isEmployed: false, // Employment status as false
    // Using an arrow function for the sayHello method
    sayHello: () => console.log("Hey, I'm Patrick..."),
    // Another method that logs a message about eating
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
};

// Accessing properties of the person1 object
console.log(person1.firstName); // Output: Spongebob
console.log(person2.firstName); // Output: Patrick

// Calling methods of the person1 object
person1.sayHello(); // Output: Hi! I am Spongebob!
person1.eat(); // Output: I am eating a Krabby Patty

// Calling methods of the person2 object
person2.sayHello(); // Output: Hey, I'm Patrick...
person2.eat(); // Output: I am eating roast beef, chicken, and pizza

// Additional Information:
// Objects can also contain nested objects, arrays, and other data types.
// You can easily extend objects by adding new properties or methods.
// Example of adding a new property:
person1.favoriteFood = "Krabby Patty"; // Adding a new property
console.log(person1.favoriteFood); // Output: Krabby Patty
