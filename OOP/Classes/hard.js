

// 🧱 Base class: Product
class Product {
    // 🔒 Private field (true encapsulation)
    #price;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.#price = price;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative.");
        }
        this.#price = value;
    }

    // 🧾 Display info
    display() {
        console.log(`🛒 ${this.name} [ID: ${this.id}] - $${this.#price.toFixed(2)}`);
    }

    // 💰 Calculate total with tax
    calculateTotal(taxRate) {
        return this.#price + (this.#price * taxRate);
    }

    // 🔍 Static method to check if two products are equal
    static isEqual(productA, productB) {
        return productA.id === productB.id;
    }
}

// 👔 Subclass: ClothingProduct (inherits from Product)
class ClothingProduct extends Product {
    constructor(id, name, price, size, material) {
        super(id, name, price);
        this.size = size;
        this.material = material;
    }

    // 🔁 Override display to include clothing info
    display() {
        super.display();
        console.log(`📏 Size: ${this.size}, 🧵 Material: ${this.material}`);
    }
}

// 📦 Class: Inventory for managing products
class Inventory {
    constructor() {
        this.products = [];
    }

    // ➕ Add product if not already in inventory
    addProduct(product) {
        if (this.products.find(p => Product.isEqual(p, product))) {
            console.log("⚠️ Product already exists in inventory.");
        } else {
            this.products.push(product);
            console.log(`✅ Added: ${product.name}`);
        }
    }

    // ➖ Remove product by ID
    removeProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.log("❌ Product not found.");
            return;
        }
        const removed = this.products.splice(index, 1);
        console.log(`🗑️ Removed: ${removed[0].name}`);
    }

    // 🔎 Search product by name (case-insensitive)
    searchProduct(name) {
        const results = this.products.filter(p => 
            p.name.toLowerCase().includes(name.toLowerCase())
        );

        if (results.length === 0) {
            console.log("🔍 No products found.");
        } else {
            console.log(`🔍 Found ${results.length} product(s):`);
            results.forEach(p => p.display());
        }
    }

    // 📋 Display all products
    displayAll() {
        if (this.products.length === 0) {
            console.log("📭 Inventory is empty.");
        } else {
            console.log("📦 Inventory:");
            this.products.forEach(p => p.display());
        }
    }
}

//Demo

const inv = new Inventory();

const shirt = new ClothingProduct(1, "T-Shirt", 25.00, "M", "Cotton");
const hoodie = new ClothingProduct(2, "Hoodie", 60.00, "L", "Fleece");
const jeans = new ClothingProduct(3, "Jeans", 45.00, "M", "Denim");

inv.addProduct(shirt);
inv.addProduct(hoodie);
inv.addProduct(jeans);
inv.addProduct(shirt); // duplicate check

console.log("\n🧾 All Products:");
inv.displayAll();

console.log("\n🔍 Search for 'hood':");
inv.searchProduct("hood");

console.log("\n🗑️ Remove Product ID 2:");
inv.removeProduct(2);

console.log("\n📦 Updated Inventory:");
inv.displayAll();
