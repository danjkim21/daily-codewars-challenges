// 8 kyu Enumerable Magic #1 - True for All?
function all( arr, fun ){
  return arr.every(elem => fun(elem));
}

// 8 kyu Take an Arrow to the knee, Functionally
var ArrowFunc = function(arr) {
  return arr.map(elem => String.fromCharCode(elem)).join(''); //Complete this function
}