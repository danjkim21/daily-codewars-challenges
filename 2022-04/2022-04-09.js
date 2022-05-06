// 8 kyu Century from year
function century(year) {
  return Math.ceil(year/100);
}

// 8 Kyu Beginner Series #2 Clock
function past(h, m, s){
  return h*3600000 + m*60000 + s*1000;
}

// 7 Kyu Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  sorted = numbers.sort((a,b) => a-b);
  return sorted[0] + sorted[1];
}