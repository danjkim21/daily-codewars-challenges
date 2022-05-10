// 8 kyu Grasshopper - Array Mean
var findAverage = function (nums) {
  return nums.reduce((acc, c) => acc + c, 0) / nums.length
}

// 8 kyu Add Length
function addLength(str) {
  return str.split(' ').map((elem) => `${elem} ${elem.length}`)
}
// 8 kyu Multiple of index
function multipleOfIndex(array) {
  return array.filter((elem, ind) => elem % ind === 0)
}