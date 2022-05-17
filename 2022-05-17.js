// 7 kyu Get key/value pairs as arrays
// take a object and return its keys and values as separate arrays
// P: one object: key, values - integers and string
// R: two arrays nested in one array, first arr: keys; second arr: values;

function keysAndValues(data) {
  // create an array with the object keys
  let keys = Object.keys(data);
  // create an array with the object values
  let values = Object.values(data);
  // return array of both [keys, values]
  return [keys, values];
}

// 7 kyu Flatten
// Take the array of arrays and flatten one level
// P: an array, with any number of nested arrays containing, str, int,
// R: an array, flattened one level

var flatten = function (array){
  // reduce array and concatenate values to acc
  return array.reduce((acc, c) => acc.concat(c), [])
}