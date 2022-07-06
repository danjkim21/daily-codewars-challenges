// Printer Errors
function printerError(s) {
  let total = 0;
  let letters = 'abcdefghijklm';

  s.split('').forEach((elem) => {
    if (!letters.includes(elem)) {
      total += 1;
    }
  });
  return `${total}/${s.length}`;
}
