// 7 kyu Sum of a sequence
const sequenceSum = (begin, end, step) => {
  total = 0;
  for (let i = begin; i <= end; i += step) {
    total += i;
  }
  return total;
};

// 7 kyu Number of Decimal Digits
function digits(n) {
  return String(n)
    .split('')
    .length
}

// 7 kyu Sum of all arguments
function sum(...n) {
  return n.reduce((acc, c) => acc + c, 0)
}
