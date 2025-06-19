// Logical operators are used to combine or manipulate boolean values
// (true or false)

// Common logical operators:
// AND (&&): Returns true if both operands are true
// OR (||): Returns true if at least one operand is true
// NOT (!): Inverts the boolean value (true becomes false, and vice versa)

// ---------- EXAMPLE 1 ----------
const temp1 = -100; // Temperature value to evaluate

// Check if the temperature is greater than 0 AND less than or equal to 30
if (temp1 > 0 && temp1 <= 30) {
    console.log("The weather is GOOD"); // Good weather conditions
} else {
    console.log("The weather is BAD"); // Bad weather conditions
}

// ---------- EXAMPLE 2 ----------
const temp2 = -250; // Another temperature value to evaluate

// Check if the temperature is less than or equal to 0 OR greater than 30
if (temp2 <= 0 || temp2 > 30) {
    console.log("The weather is BAD"); // Bad weather conditions
} else {
    console.log("The weather is GOOD"); // Good weather conditions
}

// ---------- EXAMPLE 3 ----------
const isSunny = true; // Boolean variable indicating if it's sunny

// Use NOT operator to check if it is NOT sunny
if (!isSunny) {
    console.log("It is CLOUDY"); // It is cloudy if isSunny is false
} else {
    console.log("It is SUNNY"); // It is sunny if isSunny is true
}

// Additional Information:
// Logical operators can be very useful for controlling flow in programs,
// allowing you to create complex conditions in if statements and loops.
// Always ensure that the conditions are well-structured to avoid unexpected results.
