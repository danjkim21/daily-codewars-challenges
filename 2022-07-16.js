// Count characters in your string

function count(string) {
  counts = {};

  for (const letter of string) {
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
  }

  return counts;
}
