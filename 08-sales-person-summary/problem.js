// require data.js, this module includes an array with the necessary information to process
const data = require('./data.js')
// Create a function name salesPersonSummary that takes no arguments.
// It should return an object with a summary of each sales people overall sales.
// Given the current data, the return value should look like this:
//    { Tom: 7055, Carol: 10565, Samantha: 14375 }



// To test:
// npm test 08-sales-person-summary/test.js


const salesPersonSummary = function(){
 let output = {};

 for (let i = 0; i < data.length; i++) {
   if (output[data[i].salesPerson]) {
     output[data[i].salesPerson] += data[i].dailySales;
   } else {
     output[data[i].salesPerson] = data[i].dailySales;
   }
 }

 return output;
}


module.exports = salesPersonSummary;
