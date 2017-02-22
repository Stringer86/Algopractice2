
// A function receives an array of positive integers as input. The function should
// determine whether the numbers are in ascending order. Assume all inputs are valid.
//Ex:
// inAscOrder([1,2,3,34]) -> returns true;
// inAscOrder([1,2,34,3]) -> returns false;
// PART TWO
// Write more tests! Test for invalid inputs, etc.

// To test
// npm test 18-check-ascending/test.js

const inAscOrder = function(arr) {
  let current = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= current) {
      current = arr[i]
    } else {
      return false;
    }
  }

  return true;

}

module.exports = {
  inAscOrder: inAscOrder
};
