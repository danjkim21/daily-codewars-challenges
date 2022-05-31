// 7 kyu Smallest value of an array
function min(arr, toReturn) {
  let minVal = Math.min.apply(Math, arr);
  if (toReturn === 'value') {
    return minVal;
  } else if (toReturn === 'index') {
    return arr.indexOf(minVal);
  }
}
// 7 kyu max diff - easy
function maxDiff(list) {
  let maxVal = Math.max.apply(Math, list);
  let minVal = Math.min.apply(Math, list);
  return list.length <= 1 ? 0 : maxVal - minVal;
}
