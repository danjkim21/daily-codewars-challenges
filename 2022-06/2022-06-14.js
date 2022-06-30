//  Char Code Calculation
function calc(x) {
  let total1 = x
    .split('')
    .map((elem, ind) => x.charCodeAt(ind))
    .join('');
  let total1Sum = +total1.split('').reduce((acc, c) => +acc + +c, 0);

  let total2 = total1
    .split('')
    .map((elem) => (elem === '7' ? '1' : elem))
    .join('');
  let total2Sum = +total2.split('').reduce((acc, c) => +acc + +c, 0);

  return total1Sum - total2Sum;
}
