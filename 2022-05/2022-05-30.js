// 8 kyu The 'if' function
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

// 8 kyu Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// Done without regex
function replace(s) {
  return s
    .split('')
    .map((elem) => {
      if (
        elem === 'a' ||
        elem === 'A' ||
        elem === 'e' ||
        elem === 'E' ||
        elem === 'i' ||
        elem === 'I' ||
        elem === 'o' ||
        elem === 'O' ||
        elem === 'u' ||
        elem === 'U'
      ) {
        return '!';
      } else {
        return elem;
      }
    })
    .join('');
}

// 8 kyu Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  return sperm === 'XX'
    ? "Congratulations! You're going to have a daughter."
    : "Congratulations! You're going to have a son.";
}

// 8 kyu Enumerable Magic #3 - Does My List Include This?
function include(arr, item) {
  return arr.includes(item);
}

// 8 kyu Formatting decimal places #0
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

// 8 kyu Thinkful - Number Drills: Pixelart planning
function isDivisible(wallLength, pixelSize) {
  return wallLength % pixelSize === 0;
}

// 8 kyu repeatIt
var repeatIt = function (str, n) {
  return typeof str === 'string' ? str.repeat(n) : 'Not a string';
};

// 8 kyu Tip Calculator
function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case 'excellent':
      return Math.ceil(amount * 0.2);
    case 'great':
      return Math.ceil(amount * 0.15);
    case 'good':
      return Math.ceil(amount * 0.1);
    case 'poor':
      return Math.ceil(amount * 0.05);
    case 'terrible':
      return 0;
    default:
      return 'Rating not recognised';
  }
}

// 8 kyu Sum of Multiples
function sumMul(n, m) {
  let total = 0;
  if (m > 1) {
    for (let i = n; i < m; i += n) {
      total += i;
    }
  } else {
    return 'INVALID';
  }
  return total;
}

// 8 kyu Fundamentals: Return
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}
