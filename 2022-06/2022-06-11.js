// Ones and Zeros
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

// Row Weights
function rowWeights(array) {
  let a = 0;
  let b = 0;

  array.forEach((elem, ind) => {
    ind === 0 || ind % 2 === 0 ? (a += elem) : (b += elem);
  });

  return [a, b];
}

// Maximum Product
function adjacentElementsProduct(array) {
  let prodArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    prodArr.push(array[i] * array[i + 1]);
  }

  return Math.max(...prodArr);
}

// Head, Tail, Init and Last
function head(a) {
  return a.slice(0, 1)[0];
}
function tail(a) {
  return a.slice(1, a.length);
}
function init(a) {
  return a.slice(0, a.length - 1);
}
function last(a) {
  return a.slice(-1)[0];
}
