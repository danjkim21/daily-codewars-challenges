// 8 Kyu Count the Monkeys!
function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <=n; i++) {
    arr.push(i);
  }
  return arr;
}

// 8 Kyu Sentence Smash
function smash (words) {
    return words.join(" ");
 };

// 8 Kyu Do I get a bonus?
function bonusTime(salary, bonus) {
  let total = bonus === true ? salary * 10 : salary;
  return "\u00A3" + total;
}

// 8 Kyu Convert a string to an array
function stringToArray(string){
  return string.split(" ");
}