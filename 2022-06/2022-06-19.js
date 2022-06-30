// The Vowel Code
function encode(string) {
  return string
    .split('')
    .map((elem) => {
      return elem === 'a'
        ? '1'
        : elem === 'e'
        ? '2'
        : elem === 'i'
        ? '3'
        : elem === 'o'
        ? '4'
        : elem === 'u'
        ? '5'
        : elem;
    })
    .join('');
}

function decode(string) {
  return string
    .split('')
    .map((elem) => {
      return elem === '1'
        ? 'a'
        : elem === '2'
        ? 'e'
        : elem === '3'
        ? 'i'
        : elem === '4'
        ? 'o'
        : elem === '5'
        ? 'u'
        : elem;
    })
    .join('');
}
