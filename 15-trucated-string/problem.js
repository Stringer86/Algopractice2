
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.

// To test
// npm test 15-trucated-string/test.js

const truncateString = function(str, num) {
  if (num <= 3) return str.slice(0, num) + '...';
  if (num > str.length) return str;

  let newStr = ''

  for (var i = 0; i < num; i++) {
    if (i < num - 3) {
      newStr += str[i];
    } else {
      newStr += '.';
    }
  }

  return newStr;
}

module.exports = {
  truncateString: truncateString
};
