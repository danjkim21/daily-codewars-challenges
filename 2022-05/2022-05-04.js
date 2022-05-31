// 8 kyu Sleigh Authentication
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};

// 8 kyu To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map((elem) => {
    if (Math.sqrt(elem) % 1 === 0) {
      return Math.sqrt(elem)
    } else {
      return Math.pow(elem, 2)
    }
  })
}