// 8kyu Expressions Matter
function expressionMatter(a, b, c) {
  let total = [];
  total.push(a + b + c);
  total.push(a + b * c);
  total.push(a * b + c);
  total.push(a * b * c);
  total.push((a + b) * c);
  total.push(a * (b + c));

  return Math.max.apply(Math, total);
}

// 8 kyu Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return (a && !b) || (!a && b);
}

// 8 kyu Hex to Decimal
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
