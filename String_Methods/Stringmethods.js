// Define a user name and a phone number
let userName = "Bro Code";
let phoneNumber = "123-456-7890";

// 1. Get the length of the userName string
console.log("Length of userName:", userName.length); // Outputs: 8

// 2. Get the character at the first index of userName
console.log("First character of userName:", userName.charAt(0)); // Outputs: "B"

// 3. Find the index of the first occurrence of the letter "o"
console.log('Index of first "o":', userName.indexOf("o")); // Outputs: 1

// 4. Find the index of the last occurrence of the letter "o"
console.log('Index of last "o":', userName.lastIndexOf("o")); // Outputs: 6

// 5. Trim whitespace from both ends of the userName
userName = userName.trim();
console.log("Trimmed userName:", userName); // Outputs: "Bro Code"

// 6. Convert userName to uppercase
userName = userName.toUpperCase();
console.log("Uppercase userName:", userName); // Outputs: "BRO CODE"

// 7. Convert userName to lowercase
userName = userName.toLowerCase();
console.log("Lowercase userName:", userName); // Outputs: "bro code"

// 8. Replace all dashes in phoneNumber with an empty string
phoneNumber = phoneNumber.replaceAll("-", "");
console.log("Formatted phone number:", phoneNumber); // Outputs: "1234567890"

// Additional Example: Check if userName includes the substring "Bro"
console.log('Does userName include "Bro"?', userName.includes("Bro")); // Outputs: true

// Additional Example: Split the phoneNumber into an array of digits
const phoneDigits = phoneNumber.split("");
console.log("Phone number digits:", phoneDigits); // Outputs: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


// method chaining = calling one method after another
//                   in one continuous line of code

let userName = "bro";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter)



