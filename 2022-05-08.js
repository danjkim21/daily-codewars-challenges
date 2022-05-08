// 8 kyu Training JS #4: Basic data types--Array
function getLength(arr){
  return arr.length;
}
function getFirst(arr){
  return arr[0];
}
function getLast(arr){
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  return arr;
}
function popElement(arr){
  arr.pop();
  return arr;
}

// 8 kyu Find the position!
function position(letter){
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}