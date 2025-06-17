md
# 🧠 Typecasting in JavaScript

## 📌 What is Typecasting?
Typecasting (or type conversion) is the process of converting one data type into another in JavaScript. This can be done **explicitly** (manually) or **implicitly** (automatically by JavaScript).

---

## 1️⃣ Implicit Type Conversion (Type Coercion)
JavaScript automatically converts types when performing certain operations.

### Examples:
```javascript
console.log("5" + 2);  // Outputs "52" (string concatenation)
console.log("5" - 2);  // Outputs 3 (numeric subtraction)
console.log(true + 1); // Outputs 2 (true is converted to 1)
console.log("10" * "2"); // Outputs 20 (both strings converted to numbers)
✅ Pros

Convenient for quick operations

Simplifies code in some cases

❌ Cons

Can lead to unexpected results

Makes debugging harder

2️⃣ Explicit Type Conversion
You manually convert data types using built-in functions.

Common Conversion Methods:
Function	Converts To
Number(value)	Converts to a number
String(value)	Converts to a string
Boolean(value)	Converts to a boolean
parseInt(value)	Converts to an integer
parseFloat(value)	Converts to a floating-point number
Examples:
javascript
let num = Number("123"); // Converts string "123" to number 123
let str = String(10); // Converts number 10 to string "10"
let bool = Boolean(""); // Converts empty string to false
📌 Important Notes

Boolean("") → false, but Boolean(" ") → true

Number("abc") → NaN (Not a Number)

parseInt("10px") → 10, ignores non-numeric characters

🔁 Comparison Summary
Feature	Implicit Conversion	Explicit Conversion
Control	❌ No	✅ Yes
Risk of Errors	✅ High	❌ Lower
Common Use Case	Simple expressions	Handling input data
💬 Try This!
✅ Convert "true" (string) into a boolean. 🛑 Check what Boolean(0) and Boolean(1) return. 🔍 Explore differences between parseInt() and Number() with "10px".

✍️ Author
Made with ❤️ by Mbali Phulwane 

