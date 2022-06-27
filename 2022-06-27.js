// Summing a number's digits
function sumDigits(number) {
  const absNums = Math.abs(number);
  return String(absNums)
    .split('')
    .map(Number)
    .reduce((acc, c) => acc + c, 0);
}

// Remove anchor from URL
function removeUrlAnchor(url) {
  if (url.includes('#')) {
    return url.split('#')[0];
  } else {
    return url;
  }
}

// Sum of all the multiples of 3 or 5
function findSum(n) {
  let multiplesArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesArr.push(i);
    }
  }
  return multiplesArr.reduce((acc, c) => acc + c, 0);
}

// Alternate capitalization
function capitalize(s) {
  let even = s
    .split('')
    .map((elem, ind) => (ind % 2 === 0 ? elem.toUpperCase() : elem))
    .join('');
  let odd = s
    .split('')
    .map((elem, ind) => (ind % 2 !== 0 ? elem.toUpperCase() : elem))
    .join('');
  return [even, odd];
}
