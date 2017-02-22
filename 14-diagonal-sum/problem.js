// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)
// Matrix = array of n length whose elements are n length arrays of integers.
// 3x3 example:
// diagonals( [
  // [ 1, 2, 3 ],
  // [ 4, 5, 6 ],
  // [ 7, 8, 9 ]
// ] );

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

// To test:
// npm test 14-diagonal-sum/test.js

function diagonals(matrix) {
 let sum = 0;

 for (let i = 0; i < matrix.length; i++) {
   if (i === 0 || i === matrix.length - 1) {
     sum += matrix[i][0] + matrix[i][matrix.length - 1];
   } else {
     let mid = Math.floor(matrix[i].length/2)
     sum += matrix[i][mid] + matrix[i][mid]
   }
 }

 return sum;
}

// // diagonals( [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ])

module.exports = {
  diagonals: diagonals,
};
