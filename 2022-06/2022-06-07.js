// 8 kyu Get number from string
function getNumberFromString(s) {
  let arrInts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return +s
    .split('')
    .filter((elem) => arrInts.includes(elem))
    .join('');
}
