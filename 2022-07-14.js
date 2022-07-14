// Count duplicates
function duplicateCount(text) {
  let arr = text.toLowerCase().split('');
  let counts = {};

  for (const letter of arr) {
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
  }

  return Object.values(counts).filter((elem) => elem > 1).length;
}
