// Alternate Square Sum
function alternateSqSum(arr) {
  let total = 0;
  arr.forEach((elem, ind) => {
    ind % 2 === 0 ? (total += elem) : (total += elem ** 2);
  });

  return total;
}

// Are they square?
var isSquare = function (arr) {
  return arr.length === 0
    ? undefined
    : arr.every((elem) => {
        return Math.sqrt(elem) % 1 === 0;
      });
};
