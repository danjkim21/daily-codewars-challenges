// 8 kyu 101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number){ 
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  if (number <= 10) {
    return dogs[0];
  } else if (number <= 50) {
    return dogs[1];
  } else if (number <= 100) {
    return dogs[2];
  } else {
    return dogs[3];
  }
}

// 8 kyu Dollars and Cents
function formatMoney(amount){
  return '$' + amount.toFixed(2);
}

// 8 kyu Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5;
  return total;
}

// 8 kyu Grasshopper - Function syntax debugging
function main (verb, noun) {
  return `${verb}${noun}`;
}

// 8 kyu Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
  return arr.slice(0, n);
}