'use strict'

// array threshold
// Create a function named threshold that takes an array, function, and a threshold number
// Invoke the passed function for every item in the array.
// Return true if the number of elements that return true is equal or higher
// than the threshold
//
// Eg
//
//   threshold([true,true,false,false],(element) => {
//     return element;
//   }, 2)
//
//   // true
//
//   threshold([true,true,false,false],(element) => {
//     return element % 2 === 0;
//   }, 3)
//
//   // false

// To test:
// npm test 05-array-threshold/test.js

const threshold = function(array, fn, threshold) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) count++;
  }

  if (count >= threshold) {
    return true;
  } else {
    return false;
  }
}







module.exports = threshold;
