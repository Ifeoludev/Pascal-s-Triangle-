"use strict";

function printPascal(n) {
  // An array to store all the rows
  const mat = [];

  // Loop through each row
  for (let row = 0; row < n; row++) {
    const arr = []; // This will hold one row at a time

    // Loop through each position in the row
    for (let i = 0; i <= row; i++) {
      // First and last values in every row are always 1
      if (i === 0 || i === row) {
        arr.push(1);
      } else {
        // Middle values are the sum of the two values above
        arr.push(mat[row - 1][i - 1] + mat[row - 1][i]);
      }
    }

    // Add the current row to the full triangle
    mat.push(arr);
  }

  return mat;
}

// Set n to 3
const n = 3;
const mat = printPascal(n);

// Loop to display the triangle line by line
for (let i = 0; i < mat.length; i++) {
  let line = "";
  for (let j = 0; j < mat[i].length; j++) {
    line += mat[i][j] + " ";
  }
  console.log(line);
}
