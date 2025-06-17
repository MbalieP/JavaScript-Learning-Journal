 🧠 JavaScript Input Handling: `prompt()` vs HTML Input

## 📌 What I Learned

In JavaScript, there are multiple ways to take input from the user. This lesson covers two main approaches:

---

## 1️⃣ Using `window.prompt()`

```javascript
// let username = window.prompt("What is your name?");
// console.log(username);
📝 This approach uses a pop-up dialog box to ask the user for input.

✅ Pros

Very quick to set up

Useful for small scripts or quick testing

❌ Cons

Not user-friendly for modern web applications

Not customizable (cannot style it)

2️⃣ Using HTML + JavaScript DOM Methods
📄 HTML (index.html)

html
Copy
Edit
<label id="myLabel">Enter your name:</label><br>
<input type="text" id="myText"><br>
<button type="button" id="myButton">Submit</button>

<script src="index.js"></script>
💻 JavaScript (index.js)

javascript
Copy
Edit
let username;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
};
🔍 Explanation

getElementById("myText").value grabs the value typed into the input box.

The button’s onclick function runs when the user clicks it.

The innerHTML of the label is updated to greet the user.

console.log(username) prints the name in the browser console.

🔁 Comparison Summary
Feature	window.prompt()	HTML + JS Input
Customizable Style	❌ No	✅ Yes
Modern UX	❌ Poor	✅ Great
Code Complexity	✅ Simple	🔄 Slightly more complex
Use Case	Quick popups/testing	Full web applications

💬 Try This!
✅ Add a second input for the user's age and display a full message.

🛑 Add error checking if the user submits an empty field.

✍️ Author
Made with ❤️ by Mbali Phulwane
🔗 GitLab: @MbalieP
📅 Date: June 17, 2025
