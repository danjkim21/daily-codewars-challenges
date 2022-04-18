// 8 Kyu Count Odd Numbers below n
function oddCount(n){
  totArr = [];
  for (count = 1; count < n; count++) {
    if (count % 2 !== 0) {
      totArr.push(count);
    } 
  } return totArr.length;
}

// 8 Kyu Function 2 - squaring an argument
function square(num){
  return Math.pow(num, 2);
}

//  8 Kyu My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse();
}

// 8 Kyu Keep up the hoop
function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// 8 Kyu Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(elem => elem % divisor === 0);
}