
markdown
Copy
# JavaScript String Methods

## Overview
In JavaScript, strings are immutable objects that represent a sequence of characters. There are numerous built-in methods available for manipulating and interacting with strings.

## Common String Methods

### 1. `charAt(index)`
Returns the character at the specified index.

```javascript
let str = "Hello";
console.log(str.charAt(1)); // "e"
2. charCodeAt(index)
Returns the Unicode of the character at the specified index.

javascript
Copy
let str = "Hello";
console.log(str.charCodeAt(0)); // 72
3. concat()
Combines two or more strings.

javascript
Copy
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
4. includes(searchString)
Determines whether a string contains the characters of a specified string.

javascript
Copy
let str = "Hello, World!";
console.log(str.includes("World")); // true
5. indexOf(searchValue)
Returns the index of the first occurrence of a specified value, or -1 if not found.

javascript
Copy
let str = "Hello, World!";
console.log(str.indexOf("o")); // 4
6. lastIndexOf(searchValue)
Returns the index of the last occurrence of a specified value, or -1 if not found.

javascript
Copy
let str = "Hello, World!";
console.log(str.lastIndexOf("o")); // 8
7. replace(searchValue, newValue)
Replaces the first occurrence of a specified value with another value.

javascript
Copy
let str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
8. slice(start, end)
Extracts a section of a string and returns it as a new string.

javascript
Copy
let str = "Hello, World!";
console.log(str.slice(0, 5)); // "Hello"
9. split(separator)
Splits a string into an array of substrings based on the specified separator.

javascript
Copy
let str = "Hello, World!";
console.log(str.split(", ")); // ["Hello", "World!"]
10. toLowerCase()
Converts a string to lowercase letters.

javascript
Copy
let str = "Hello, World!";
console.log(str.toLowerCase()); // "hello, world!"
11. toUpperCase()
Converts a string to uppercase letters.

javascript
Copy
let str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
12. trim()
Removes whitespace from both ends of a string.

javascript
Copy
let str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!"
Conclusion
These are some of the most commonly used string methods in JavaScript. Understanding these methods can help you manipulate and handle strings effectively in your applications.

