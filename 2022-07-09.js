// Replace With Alphabet Position
function alphabetPosition(text) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return text
    .split('')
    .filter((elem) => alphabet.includes(elem))
    .map((elem) => elem.toUpperCase().charCodeAt(0) - 64)
    .join(' ');
}
