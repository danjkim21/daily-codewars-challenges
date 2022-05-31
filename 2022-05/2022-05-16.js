// 7kyu Maximum Multiple
// Find the largest integer that is divisible by the divisor and is less than the bound
// p: divisor and bound are integers, > 0
// r: integer > 0

function maxMultiple(divisor, bound) {
  // create a output variable to contain divisible integers
  let output = [];
  // loop through all numbers starting with the bound then i--
  for (let i = bound; i > 0; i--) {
    // if the number is divisible by 0, push to output array
    if (i % divisor === 0) {
      output.push(i);
    }
  }
  // return the first element in the output array
  return output[0];
}

// 7 kyu Sort arrays - 1
// Sort array of names in lexiconographical order
// p: names array - unsorted array of string
// r: sorted array of string

sortme = function (names) {
  // use the .sort() method on names
  return names.sort();
};

// 7 kyu My Language Skills
// Return an array of languages that scored over 60 in decending order
// p: Object with key - string,  value - integer attributes
// r: array with string sorted in descending order of scores

function myLanguages(results) {
  // turn object into an array of key value pairs
  arr = Object.entries(results)
    // filter array >= 60
    .filter((elem) => elem[1] >= 60)
    // sort array in descending order
    .sort((a, b) => b[1] - a[1]);
  // return all keys from array index 0
  return arr.map((elem) => elem[0]);
}
