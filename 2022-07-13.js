// Find the unique number
function findUniq(arr) {
  const counts = {};

  for (const uniq of arr) {
    counts[uniq] = counts[uniq] ? counts[uniq] + 1 : 1;
  }

  for (num in counts) {
    if (counts[num] === 1) {
      return +num;
    }
  }
}
