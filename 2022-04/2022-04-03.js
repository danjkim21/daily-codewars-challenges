// 8 kyu Reversed sequence
const reverseSeq = n => {
  arr = []
  for (let i = 1; i <= n; i++) {
    arr.unshift(i);
  };
  return arr;
};

// 8 kyu You only need one - Beginner
function check(a, x) {
  return a.includes(x);
}

// 8 kyu Find Maximum and Minimum Values of a List
var min = function(list){
  list.sort((a,b) => a-b);
  return list[0];
}

var max = function(list){
  list.sort((a,b) => b-a);
  return list[0];
}