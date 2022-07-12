// Simple Pig Latin
function pigIt(str) {
  return str
    .split(' ')
    .map((elem) => {
      if (elem === '!' || elem === '?' || elem === '.' || elem === ',') {
        return elem;
      } else {
        return elem.slice(1, elem.length) + elem[0] + 'ay';
      }
    })
    .join(' ');
}
