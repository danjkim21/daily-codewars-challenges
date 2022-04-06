// 7 Kyu Square Every Digit
function squareDigits(num){
  let digitsSqr = num.toString().split('').map(ele => Math.pow(ele, 2)).join('');
  return Number(digitsSqr);
}

//  7 Kyu Highest and Lowest
function highAndLow(numbers){
  let arrSorted = numbers.split(" ").sort((a,b) => a-b)
  let high = arrSorted[arrSorted.length - 1];
  let low = arrSorted[0];
  return `${high} ${low}`;
}