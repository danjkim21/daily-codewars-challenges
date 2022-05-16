//  7 kyu JavaScript Array Filter
// PREP
// filter out odd numbers
// P: numbersArray= array of n numbers, integers, >1?
// R: if odd = return even numbers in array, if only even, empty array []

function getEvenNumbers(numbersArray) {
  //  use filter() to return only even numbers
  return numbersArray.filter((elem) => elem % 2 === 0);
}

// 7 kyu Sum of numbers from 0 to N
// PREP
// take count > add all nums from 0 to count
// P: count is an integer, can be less than 0
// R: sum if greater than 0 into a string, string if less 

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    // Conditional for numbers greater than 0 
    if (count > 0) {
      // Count all nums starting from 0 to number in an array
      let total = [];
      for (let i = 0; i <= count; i++) {
        total.push(i);
      }
    // return array and sum in a string format
    return `${total.join('+')} = ${total.reduce((acc,c) => acc+c,0)}`;
    // Numbers equal to 0 > return '0=0'
    } else if (count === 0) {
      return '0=0';
    // Numbers less than 0 > return `number is < 0`
    } else if (count < 0) {
      return `${count}<0`;
    } 
  };

  return SequenceSum;

})();