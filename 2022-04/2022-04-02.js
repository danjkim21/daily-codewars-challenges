// 8 kyu - Get the mean of an array
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((acc, c) => acc + c / marks.length, 0));
  }

// 8 kyu - Reversed Words
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

// 8 kyu - MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase();
}

// 8 kyu - is he gonna survive?
function hero(bullets, dragons){
    return dragons * 2 > bullets ? false: true;
}