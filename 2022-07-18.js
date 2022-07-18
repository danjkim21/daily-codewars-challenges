// Factorial
function factorial(n) {
  let total = 1;
  if (n < 2) {
    return 1;
  } else {
    for (i = 1; i <= n; i++) {
      total *= i;
    }
  }
  return total;
}
