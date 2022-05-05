// Codewars Array Ladder!!!
// 8 kyu Remove First and Last Character Part Two
function array(arr){
  let splitArr = arr.split(',');
  if (splitArr.length <= 2) {
    return null
  } else {
    splitArr.pop();
    splitArr.shift();
  }
  return splitArr.join(' ');
}

// 7 kyu Sum of the first nth term of Series
function SeriesSum(n) {
  let total = 1;
  if (n === 0) {
    return "0.00"
  } else {
    for (let i = 1; i < n; i++) {
      total += 1/(4 + (3 * (i-1)));
    }
  }
  return total.toFixed(2);
}

// 6 kyu Create Phone Number
function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

// 7 kyu Testing 1-2-3
var number=function(array){
  return array.map((elem, ind) => {
    return `${ind + 1}: ${elem}`;
  })
}

// 8 kyu Basic Training: Add item to an Array
websites.push('codewars');
