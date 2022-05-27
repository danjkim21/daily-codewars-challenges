// 7 kyu Largest Elements
// Take an array (xs) and output the top elements (n) from a list.
// Parameters are n - integer >= 0, and xs - an array of positive numbers
// The return should be an array of the top elements, number of elements returned is dictated by n
function largest(n, xs) {
  // Conditional: If n parameter is 0, return an empty array
  return n === 0 ? [] : xs
    // Else sort array
    .sort((a, b) => a - b)
    // and slice the top numbers by position n
    .slice(-n);
}

// 7 kyu Spacify
// Take the string and return it with spaces inserted between each character.
// Parameter is a string, return will also be a string

function spacify(str) {
  return str
    // Split string into an array
    .split('')
    // Join array elements with a space
    .join(' ')
}