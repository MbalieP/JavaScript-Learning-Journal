// 🧠 JavaScript Classes (ES6 Feature)
//
// A class is a blueprint for creating objects with shared properties and methods.
// Classes offer a cleaner and more modern syntax compared to constructor functions.
// Key features include: constructors, methods, inheritance, encapsulation, static members, etc.

class Product {
    // 🔧 Constructor: Automatically called when a new object is created using 'new'.
    // It sets up initial values for the object's properties.
    constructor(name, price) {
        this.name = name;   // 'this' refers to the current instance of the class
        this.price = price; // Sets the price property
    }

    // 🖨️ Method: Displays product details in a readable format
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`); // Formats to 2 decimal places
    }

    // 💰 Method: Calculates the total price after applying sales tax
    // salesTax should be passed as a decimal (e.g., 5% → 0.05)
    calculateTotal(salesTax) {
        // Formula: base price + (base price * tax rate)
        return this.price + (this.price * salesTax);
    }
}

// 📈 Sales tax rate: 5%
const salesTax = 0.05;

// 🛍️ Creating instances (objects) of the Product class
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

// 🧾 Displaying the first product's info
product1.displayProduct();

// 🧮 Calculating and displaying the total cost with tax
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`); // 2 decimal places for currency
