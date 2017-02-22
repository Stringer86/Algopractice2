`use strict`

// array every
// create a function named `every` that takes an array and a function
// it should return true if and only if the passed function returns true
// for ALL of the elements in the array
//
// To test:
// npm test 03-array-every/test.js

const every = function(array, fn){
 for (let i = 0; i < array.length; i++) {
   if (!fn(array[i])) return false;
 }

 return true;
}


module.exports = every;
