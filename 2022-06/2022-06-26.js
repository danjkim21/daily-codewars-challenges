// Return a string's even characters.
function evenChars(string) {
  if (string.length <= 2 || string.length > 100) {
    return 'invalid string';
  } else {
    return string.split('').filter((elem, ind) => {
      return (ind + 1) % 2 === 0;
    });
  }
}
