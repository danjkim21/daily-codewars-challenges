// 8 Kyu L1: Set Alarm

function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false;
}

//   8 Kyu Grasshopper - Messi Goals
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// 8 Kyu Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld *2));
}

// 7 Kyu Is this a triangle?
function isTriangle(a,b,c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    } else if (a + b > c && a + c > b && b + c > a){
      return true;
    } else {
      return false;
    }
  }