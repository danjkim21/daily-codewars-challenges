// 8 kyu Even numbers in an array
function evenNumbers(array, number) {
  let even = array.filter((elem) => elem % 2 === 0);
  return even.slice(-number);
}
