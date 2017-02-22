const data = require('./data.js')
// Require `data.js`, this module includes an array with the necessary information to process
//
// Create a function named `percentageUnder` that takes no parameters
// this functions should return the percentage of accounts in the module that have
// a balance below 0.
//
// The percentage should be a number between 0 and 1
//
// To test:
// npm test 07-percentage-under/test.js

const percentageUnder = function(){
  let total = data.length;
  let below = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i].balance < 0) below++;
  }

  return below / total;

}


module.exports = percentageUnder;
