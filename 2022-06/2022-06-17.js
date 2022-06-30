// Does my number look big in this?
function narcissistic(value) {

  let valueTest = String(value)
    .split('')
    .map((elem) => Math.pow(+elem, String(value).length))
    .reduce((acc, c) => acc + c, 0);

  return value === valueTest;
}
