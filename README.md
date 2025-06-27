In this project, I wrote a JavaScript program that generates Pascal’s Triangle up to 4 rows using dynamic programming. The goal was to understand how each number in the triangle is formed and how to build it using arrays and loops.

## How Pascal’s Triangle Works

Each row starts and ends with 1. Every number in between is the sum of the two numbers directly above it from the previous row. 


## How My Code Works

1. I created an empty array `mat` to store all the rows.
2. For each row, I created a new array `arr`.
3. Inside each row:
   - If it’s the first or last position, I pushed `1`.
   - If it’s in the middle, I added two numbers from the row above: `mat[row - 1][i - 1] + mat[row - 1][i]`.
4. After finishing a row, I added it to `mat`.
5. I then printed out each row with the numbers spaced out.








