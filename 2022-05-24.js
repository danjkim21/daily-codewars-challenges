// 7 kyu Sum of odd numbers
function rowSumOddNumbers(n) {
  return n * n * n;
}

// 7 kyu Fizz Buzz
// Return an array
function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.map((elem) => {
    if (elem % 3 === 0 && elem % 5 === 0) {
      return 'FizzBuzz';
    } else if (elem % 3 === 0) {
      return 'Fizz';
    } else if (elem % 5 === 0) {
      return 'Buzz';
    } else {
      return elem;
    }
  });
}

// 7 kyu Use reduce() to calculate the sum of the values in an array
function sum(array) {
  return array.reduce((acc, c) => acc + c);
}

// 7 kyu Convert an array of strings to array of numbers
function toNumberArray(stringarray) {
  return stringarray.map(Number);
}
// 8 kyu L1: Bartender, drinks!
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case 'jabroni':
      return 'Patron Tequila';
      break;
    case 'school counselor':
      return 'Anything with Alcohol';
      break;
    case 'programmer':
      return 'Hipster Craft Beer';
      break;
    case 'bike gang member':
      return 'Moonshine';
      break;
    case 'politician':
      return 'Your tax dollars';
      break;
    case 'rapper':
      return 'Cristal';
      break;
    default:
      return 'Beer';
  }
}
