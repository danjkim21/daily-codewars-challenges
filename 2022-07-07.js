// Find the odd int

function findOdd(A) {
  const counts = {};

  for (const num of A) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (count in counts) {
    if (counts[count] % 2 !== 0) {
      return +count;
    }
  }
}
