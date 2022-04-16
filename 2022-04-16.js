// 8 kyu Double Char
function doubleChar(str) {
    return str.split("").map(elem => elem + elem).join("");
  }

// 8 kyu Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }
  
// 8 kyu Parse nice int from char problem
function getAge(inputString){
    let splitStr = inputString.split("");
    return +splitStr[0];
  }

// 8 kyu Short Long Short
function solution(a, b){
    return a.length > b.length? b + a + b : a + b + a;
  }
  