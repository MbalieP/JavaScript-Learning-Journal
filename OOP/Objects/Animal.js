// Object: A structure to group related data and behaviors (properties and methods)
// This example represents animals with name, species, sound, and actions

// Creating an object representing a Dog
const dog = {
    name: "Max", // Dog's name
    species: "Dog", // Species type
    age: 5, // Age in years
    isPet: true, // Is this animal a pet?

    // Method: Animal speaks
    speak: function() {
        console.log("Woof! Woof!");
    },

    // Method: Animal plays
    play: function() {
        console.log(`${this.name} is playing fetch!`);
    }
};

// Creating another object representing a Cat
const cat = {
    name: "Whiskers", // Cat's name
    species: "Cat", // Species type
    age: 3,
    isPet: true,

    // Arrow function for speak (note: 'this' doesn't refer to the object in arrow functions)
    speak: () => {
        console.log("Meow~");
    },

    play: function() {
        console.log(`${this.name} is chasing a laser pointer!`);
    }
};

// Accessing properties
console.log(dog.name);  // Output: Max
console.log(cat.species);  // Output: Cat

// Calling methods
dog.speak();    // Output: Woof! Woof!
dog.play();     // Output: Max is playing fetch!

cat.speak();    // Output: Meow~
cat.play();     // Output: Whiskers is chasing a laser pointer!

// Adding new behavior dynamically
dog.sleep = function() {
    console.log(`${this.name} is sleeping... Zzz`);
};

dog.sleep();  // Output: Max is sleeping... Zzz

// You can nest objects too (example)
cat.owner = {
    name: "Luna",
    age: 25
};

console.log(`${cat.name}'s owner is ${cat.owner.name}`); // Output: Whiskers's owner is Luna
