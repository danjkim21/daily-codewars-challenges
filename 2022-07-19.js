// Duplicate Encoder
function duplicateEncode(word) {
  let arr = word.toLowerCase().split('');
  let parens = '';

  arr.forEach((letter) => {
    arr.filter((dup) => dup === letter).length > 1 ? (parens += ')') : (parens += '(');
  });

  return parens;
}
