// Reverse a Number
function reverseNumber(n) {
  return n < 1
    ? -String(Math.abs(n)).split('').reverse().join('')
    : +String(n).split('').reverse().join('');
}
