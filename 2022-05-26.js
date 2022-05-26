// 7 kyu Sum of Minimums!
// parameter is an array of arrays containing integers
// sum the min value from each array into one number
// the return should be a single integer

function sumOfMinimums(arr) {
  return arr
    .map((elem) => Math.min.apply(Math, elem))
    .reduce((acc, c) => acc + c, 0);
}

// 7 kyu Divide and Conquer
// parameter is an array containing integer and string
// sum the integers and strings separately and subtract the total of each
// the return should be a single integer

function divCon(x) {
  let str = x
    .filter((elem) => typeof elem === 'string')
    .reduce((acc, c) => acc + +c, 0);

  let nums = x
    .filter((elem) => typeof elem === 'number')
    .reduce((acc, c) => acc + c, 0);

  return nums - str;
}
