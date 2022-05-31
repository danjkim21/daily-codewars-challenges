// 8 kyu Grasshopper - Combine strings
function combineNames(first, last) {
  return `${first} ${last}`;
}

// 8 kyu Are arrow functions odd?
function odds(values) {
  return values.filter((elem) => elem % 2 !== 0);
}

// 8 kyu For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
var quote = function (fighter) {
  return fighter.toLowerCase() === 'george saint pierre'
    ? 'I am not impressed by your performance.'
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

// 8 kyu simple calculator
function calculator(a, b, sign) {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'unknown value';
  }
}

// 8 kyu Training JS #10: loop statement --for
function pickIt(arr) {
  var odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }

  return [odd, even];
}

// 8 kyu get ascii value of character
function getASCII(c) {
  return c.charCodeAt(0);
}
