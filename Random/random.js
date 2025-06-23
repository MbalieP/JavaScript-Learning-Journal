// Declare variables to store the values of the dice rolls
let x; // Variable to hold the result of the first die
let y; // Variable to hold the result of the second die
let z; // Variable to hold the result of the third die

// Event listener for the "rollbutton" click event
document.getElementById("rollbutton").onclick = function() {
    // Generate random numbers for the dice rolls (1 to 6)
    x = Math.floor(Math.random() * 6) + 1; // Roll for the first die
    y = Math.floor(Math.random() * 6) + 1; // Roll for the second die
    z = Math.floor(Math.random() * 6) + 1; // Roll for the third die

    // Update the HTML elements with the results of the rolls
    document.getElementById("xlabel").innerHTML = `Die 1: ${x}`; // Display result for the first die
    document.getElementById("ylabel").innerHTML = `Die 2: ${y}`; // Display result for the second die
    document.getElementById("zlabel").innerHTML = `Die 3: ${z}`; // Display result for the third die
}

/*
Additional Information:
- Math.random(): Generates a floating-point, pseudo-random number in the range from 0 (inclusive) to 1 (exclusive).
- Math.floor(): Rounds down to the nearest whole number. When combined with Math.random(), it generates integers suitable for simulating dice rolls (1-6).
- The results of each die roll are displayed in HTML elements with IDs: xlabel, ylabel, and zlabel.

Examples of Usage:
1. **Single Roll Example**: 
   - Click the "Roll" button.
   - Possible output: 
     - Die 1: 3
     - Die 2: 5
     - Die 3: 2

2. **Multiple Rolls**: 
   - Click the "Roll" button multiple times.
   - Possible outputs could vary, e.g.:
     - Roll 1: Die 1: 4, Die 2: 2, Die 3: 6
     - Roll 2: Die 1: 1, Die 2: 3, Die 3: 5
     - Roll 3: Die 1: 6, Die 2: 1, Die 3: 4

3. **Game Integration**:
   - This code can be integrated into games where dice rolls determine player movements, scores, or events.

4. **Statistics**:
   - You could extend this code to track how many times each number is rolled during a session by using additional arrays or counters.
*/
