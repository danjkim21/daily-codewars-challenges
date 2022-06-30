// Reverse every other word in the string
function reverse(str) {
  return str
    .trim()
    .split(' ')
    .map((elem, ind) => {
      if (ind % 2 !== 0) {
        return elem.split('').reverse().join('');
      } else {
        return elem;
      }
    })
    .join(' ');
}
