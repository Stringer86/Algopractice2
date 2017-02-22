
// Check if a string (first argument) ends with the given target string (second argument).
// Return a Boolean value
// Examples:
// confirmEnding("Bastian", "n") -> true
// confirmEnding("Connor", "n") -> false
// confirmEnding("He has to give me a new name", "name") -> true

// To test
// npm test 17-confirm-ending/test.js


const confirmEnding = function(str, target) {
  let length = str.length - target.length;

  if (str.slice(length) === target) return true;
  return false;
}


module.exports = {
  confirmEnding: confirmEnding
}
