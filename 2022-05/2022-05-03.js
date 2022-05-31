// 8 Kyu SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
  aSumSquared = a.reduce((acc, c) => acc + c ** 2, 0)
  bSumCubed = b.reduce((acc, c) => acc + c ** 3, 0)
  
  return aSumSquared > bSumCubed;
}

// 8 kyu Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  mergedArr = arr1.concat(arr2);
  uniq = [...new Set(mergedArr)];

  return uniq.sort((a,b) => a-b);
}

// 8 kyu Reversing Words in a String
function reverse(string){
  return string.trim().split(' ').reverse().join(' ');
}

// 8 kyu Training JS #2: Basic data types--Number
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a= v6   //set number value to a
  var b= v3   //set number value to b
  return a%b;
}

// 8 kyu Pre-FizzBuzz Workout #1
function preFizz(n) {
  total = [];
  for (let i=1; i <=n; i++){
    total.push(i);
  }
  return total;
}