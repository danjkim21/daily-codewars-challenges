// 8 kyu Is it even?
function testEven(n) {
  return n % 2 !== 0 ? false : true;
}

// 8 Kyu Sum The Strings
function sumStr(a,b) {
  let arr = [a,b].map(elem => Number(elem));
  return arr.reduce((acc, c) => String(acc + c));
}

// 8 kyu Sort and Star
function twoSort(s) {
  let sorted = s.sort();
  return sorted[0].split('').join('***');
}

// 8 kyu Grasshopper - Terminal game move function
function move (position, roll) {
  return position + roll * 2;
}