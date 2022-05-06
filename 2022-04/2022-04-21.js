// 8 Kyu All Star Code Challenge #18
function strCount(str, letter){  
  letterArr = str.split("").filter(elem => elem === letter).join("");
  return letterArr.length;
}

// 8 Kyu Well of Ideas - Easy Version
function well(x){
  let goodCount = x.filter(elem => elem === 'good').length;
  
  if (goodCount >= 3) {
    return "I smell a series!"
  } else if (goodCount >= 1) {
    return "Publish!"
  } else {
    return "Fail!"
  }

}

// 8 kyu Squash the bugs
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest
}

// 8 kyu Grasshopper - Debug sayHello
function sayHello(name) {
  return `Hello, ${name}`;
}

// 8 kyu N-th Power
function index(array, n){
  if (array.length <= n) {
    return -1
  } else {
    return array[n] ** n;
  }
}