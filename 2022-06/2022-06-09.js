// 8 kyu Incorrect division method
const solve = (x, y) => x / y;

// Miles per gallon to kilometers per liter
function converter(mpg) {
  let kpl = +(mpg / (4.54609188 / 1.609344)).toFixed(2);
  return kpl;
}
