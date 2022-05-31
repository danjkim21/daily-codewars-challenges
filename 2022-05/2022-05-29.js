// 8 kyu Grasshopper - Variable Assignment Debug
var a = 'dev';
var b = 'Lab';
var name = a + b;

// 8 kyu Kata Example Twist
// add the value "codewars" to the websites array 1,000 times
var websites = [];
for (let i = 1; i <= 1000; i++) {
  websites.push('codewars');
}

// 8 kyu USD => CNY
function usdcny(usd) {
  let cny = (usd * 6.75).toFixed(2);
  return `${cny} Chinese Yuan`;
}

// 8 kyu Take the Derivative
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
