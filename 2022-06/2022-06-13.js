// Binary Addition
function addBinary(a, b) {
  return (a + b).toString(2);
}

// Count the divisors of a number
function getDivisorsCnt(n) {
  let diviSum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      diviSum += 1;
    }
  }
  return diviSum;
}

// Sort Numbers
function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

// Make a function that does arithmetic!
function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}
