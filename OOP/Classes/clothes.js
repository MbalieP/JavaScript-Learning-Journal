// 📦 Base class representing a general product
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price; // Encapsulated property (underscore to imply private)
    }

    // ✅ Getter for price (read access)
    get price() {
        return this._price;
    }

    // ✅ Setter for price (write access with validation)
    set price(value) {
        if (value < 0) {
            console.log("❌ Price cannot be negative.");
        } else {
            this._price = value;
        }
    }

    // 📊 Displays product info
    displayProduct() {
        console.log(`🛍️ Product: ${this.name}`);
        console.log(`💵 Price: $${this._price.toFixed(2)}`);
    }

    // 📈 Calculate total with tax
    calculateTotal(salesTax) {
        return this._price + (this._price * salesTax);
    }

    // ⚖️ Static method to compare two products' prices
    static comparePrices(p1, p2) {
        if (p1.price > p2.price) {
            return `${p1.name} is more expensive than ${p2.name}`;
        } else if (p1.price < p2.price) {
            return `${p2.name} is more expensive than ${p1.name}`;
        } else {
            return `${p1.name} and ${p2.name} have the same price`;
        }
    }
}

// 👕 Subclass representing clothing products
class ClothingProduct extends Product {
    constructor(name, price, size, color) {
        super(name, price); // Call the parent constructor
        this.size = size;
        this.color = color;
    }

    // 👔 Override the display method to add clothing-specific info
    displayProduct() {
        super.displayProduct(); // Call base class method
        console.log(`📏 Size: ${this.size}`);
        console.log(`🎨 Color: ${this.color}`);
    }

    // 🎁 Method to apply discount
    applyDiscount(discountPercent) {
        const discountAmount = this._price * (discountPercent / 100);
        this._price -= discountAmount;
    }
}

// 🧪 Example usage

const shirt = new ClothingProduct("Formal Shirt", 45.00, "M", "Blue");
const pants = new ClothingProduct("Chino Pants", 60.00, "L", "Black");

// Before discount
shirt.displayProduct();
pants.displayProduct();

// Apply 10% discount on pants
pants.applyDiscount(10);

console.log("\n📉 After Discount:");
pants.displayProduct();

// Compare prices
console.log("\n🔍 Price Comparison:");
console.log(Product.comparePrices(shirt, pants));
