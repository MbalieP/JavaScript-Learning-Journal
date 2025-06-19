// 2D Array: A multi-dimensional array that stores data in a matrix format,
// consisting of rows and columns. 
// Useful for applications like games (e.g., tic-tac-toe), spreadsheets, or representing images.

const matrix = [
    [1, 2, 3], // First row of the matrix
    [4, 5, 6], // Second row of the matrix
    [7, 8, 9]  // Third row of the matrix
];

// Example of modifying the matrix to represent a game board (commented out)
matrix[0][0] = 'X'; // Sets the first element of the first row to 'X'
matrix[0][1] = 'O'; // Sets the second element of the first row to 'O'
matrix[0][2] = 'X'; // Sets the third element of the first row to 'X'

 matrix[1][0] = 'O'; // Sets the first element of the second row to 'O'
 matrix[1][1] = 'X'; // Sets the second element of the second row to 'X'
 matrix[1][2] = 'O'; // Sets the third element of the second row to 'O'

 matrix[2][0] = 'X'; // Sets the first element of the third row to 'X'
 matrix[2][1] = 'O'; // Sets the second element of the third row to 'O'
 matrix[2][2] = 'X'; // Sets the third element of the third row to 'X'

// Loop through each row of the matrix
for (let row of matrix) {
  Join the elements of the current row into a single string, separated by spaces
    const rowString = row.join(' '); 
    Log the formatted string representation of the row to the console
    console.log(rowString); // Outputs: "1 2 3", "4 5 6", "7 8 9"
}
