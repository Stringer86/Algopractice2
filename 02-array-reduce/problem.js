'use strict'

// array reduce
// create a function name `reduce` that takes in an array, a function, and a place to reduce the array against.
// It should return an accumulation of the items in the array that has been processed
// by the provided function.
//
// to test:
// npm test 02-array-reduce/test.js

const reduce = function(array, fn, acc){

  if (Array.isArray(acc)) {
    for (let i = 0; i < array.length; i++) {
      fn(acc, array[i])
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      acc = fn(acc, array[i])
    }
  }

  return acc;
}

module.exports = reduce;
