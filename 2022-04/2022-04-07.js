// Kyu 7 - You're a square
var isSquare = function(n){
  let sqRoot = Math.abs(Math.sqrt(n));
  return sqRoot % 1 !== 0 ? false : true;
}

// Kyu 7 - To Descending order
function descendingOrder(n){
  return Number(String(n).split("").sort((a,b) => b-a).join(""));
}

// Kyu 7 - List filter
function filter_list(l) {
  return l.filter(elem => typeof elem == "number");
}

// Kyu 7 - Shortest word
function findShort(s){
  let arrLeng = s.split(" ").map(elem => elem.length);
  return Math.min(...arrLeng);
}