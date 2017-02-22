// require data.js, this module includes an array with the necessary information to process
const data = require('./data.js')
// Create a function name salesDaySummary that takes no arguments.
// It should return an object with a summary of each day's overall sales.
// Given the current data, the return value should look like this:
//    { "2016-01-01": 7501, "2016-01-02": 7729, "2016-01-03": 16765 }



// To test:
// npm test 09-sales-day-summary/test.js


const salesDaySummary = function(){
  let output = {};

  for (let i = 0; i < data.length; i++) {
    if (output[data[i].date]) {
      output[data[i].date] += data[i].dailySales;
    } else {
      output[data[i].date] = data[i].dailySales;
    }
  }

  return output;
}


module.exports = salesDaySummary;
