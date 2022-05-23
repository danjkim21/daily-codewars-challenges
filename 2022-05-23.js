// 7 kyu Name Array Capping
function capMe(names) {
  return names.map((elem) => {
    return elem[0].toUpperCase() + elem.substr(1).toLowerCase();
  });
}
// 7 kyu Nth Smallest Element (Array Series #4)
function nthSmallest(arr, pos) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[pos - 1];
}