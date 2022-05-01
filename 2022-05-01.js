// 8 kyu Plural
function plural(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return true;
  }
}

// 7 kyu Find the divisors!
function divisors(integer) {
  let divisorsArr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
        divisorsArr.push(i)
      } 
  }
  return divisorsArr.length === 0 ? `${integer} is prime` : divisorsArr;
};

// 7 kyu Odd or Even?
function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    let summed = array.reduce((acc,c) => Math.abs(acc + c),0);
    return summed % 2 === 0 ? "even" : "odd";
  }
}