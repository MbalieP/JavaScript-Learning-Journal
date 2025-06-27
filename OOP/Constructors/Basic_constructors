// 🛠️ Constructor Function Example in JavaScript

// A constructor is a **special function** used to create and initialize objects.
// When called with the `new` keyword, it sets up a **template** for creating multiple similar objects.
// This is part of JavaScript's approach to **object-oriented programming** (OOP).

function Car(make, model, year, color) {
    // 🔧 Assigning properties to the object using 'this'
    // 'this' refers to the current object being created
    this.make = make;     // e.g., Ford, Chevrolet, Dodge
    this.model = model;   // e.g., Mustang, Camaro, Charger
    this.year = year;     // e.g., 2024, 2025, 2026
    this.color = color;   // e.g., red, blue, silver

    // 🚗 Defining a method inside the constructor
    // Each Car object will have its own copy of this function (less memory efficient than defining on prototype)
    this.drive = function() {
        console.log(`You drive the ${this.model}`);
    };
}
// 🚘 Creating instances (objects) of the Car "class" using the 'new' keyword
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// 🧪 Calling the `drive` method for each car
car1.drive();  // Output: You drive the Mustang
car2.drive();  // Output: You drive the Camaro
car3.drive();  // Output: You drive the Charger

// 🖨️ Displaying properties of car1
console.log(car1.make);   // Output: Ford
console.log(car1.model);  // Output: Mustang
console.log(car1.year);   // Output: 2024
console.log(car1.color);  // Output: red

// 🖨️ Displaying properties of car2
console.log(car2.make);   // Output: Chevrolet
console.log(car2.model);  // Output: Camaro
console.log(car2.year);   // Output: 2025
console.log(car2.color);  // Output: blue

// 🖨️ Displaying properties of car3
console.log(car3.make);   // Output: Dodge
console.log(car3.model);  // Output: Charger
console.log(car3.year);   // Output: 2026
console.log(car3.color);  // Output: silver



