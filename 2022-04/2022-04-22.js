// 8 kyu Grasshopper - If/else syntax debug
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}

//  8 kyu Powers of 2
function powersOfTwo(n){
  arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr
}

// 8 kyu Drink about
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy'
  } else if (old < 18) {
    return 'drink coke'
  } else if (old < 21) {
    return 'drink beer'
  } else {
    return 'drink whisky'
  }
};

// 8 kyu How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// 8 Kyu What's the real floor?
function getRealFloor(n) {
  if (n <=0) {
    return n;
  } else if (n <=13) {
    return n-1;
  } else {
    return n-2;
  }
}

// 8 Kyu Is it a palindrome?
function isPalindrome(x) {
  let xReverse = x.split('').reverse().join('').toLowerCase();
  return x.toLowerCase() === xReverse ? true : false;
}

// 8 Kyu What is between?
function between(a, b) {
  let arr = []
  if (a < b) {
    for (let i = a; i <= b; i++ ) {
      arr.push(i);
    }
  }
  return arr;
}

// 8 kyu Reverse List Order
function reverseList(list) {
  return list.reverse();
}