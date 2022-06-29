// Love vs friendship
function wordsToMarks(string) {
  let asciiConv = string
    .split('')
    .map((char) => char.charCodeAt(0) - 96)
    .reduce((acc, c) => acc + c, 0);
  return asciiConv;
}
