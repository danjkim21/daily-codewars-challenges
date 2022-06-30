// CSV representation of array
function toCsvText(array) {
  return array.join('\n');
}

//Arguments to Binary addition
function arr2bin(arr) {
  let nums = arr.filter((elem) => typeof elem === 'number');
  if (nums.length < 1) {
    return '0';
  } else {
    return nums.reduce((acc, c) => acc + c, 0).toString(2);
  }
}
