// 7 kyu Two Oldest Ages
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  let ageSort = ages.sort((a, b) => b - a);
  return [ageSort[1], ageSort[0]];
}

// 7 kyu Find the capitals
var capitals = function (word) {
	let arr = [];
  word.split('').forEach((elem, ind) => {
    if (elem === elem.toUpperCase()) {
      arr.push(ind);
    }
  })
  return arr;
};

// 7 kyu No oddities here
function noOdds( values ){
  let arr = []
  values.forEach(elem => {
    if (elem % 2 === 0) {
      arr.push(elem)
    }
  })
  return arr;
}