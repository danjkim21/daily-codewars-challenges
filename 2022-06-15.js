//Use map() to double the values in an array
function double(array) {
  return array.map((elem) => elem + elem);
}

//Array comparator
function matchArrays(v, r) {
  total = 0;
  r.forEach((elem) => {
    return v.includes(elem) ? (total += 1) : total;
  });
  return total;
}

// Convert Hash To An Array
function convertHashToArray(hash) {
  let arrConv = Object.entries(hash);
  return arrConv.sort();
}

// Array Appender
function appendArrays(arr1, arr2) {
  arr2.forEach((elem) => arr1.push(elem));
  return arr1;
}

// Sum of Array Averages
const sumAverage = (arr) => {
  let newArr = Math.floor(
    arr
      .map((elem, ind) => {
        return elem.reduce((acc, c) => acc + c, 0) / elem.length;
      })
      .reduce((acc, c) => acc + c, 0)
  );
  return newArr;
};

// Filter Coffee
function search(budget, prices) {
  let coffeePrices = prices.filter((elem) => elem <= budget);
  return coffeePrices.sort((a, b) => a - b).toString();
}

// Is every value in the array an array?
const arrCheck = (value) => {
  return value.every((elem) => Array.isArray(elem));
};

// Between Extremes
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}

// [JS] Parse integers in array
var parseNumbers = function (intStrs) {
  return intStrs.map((elem) => parseInt(elem));
};
