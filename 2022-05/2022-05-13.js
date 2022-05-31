// 8 kyu UEFA EURO 2016
// P: Array [string] always 2, Array [number] always 2
// R: return a string `at ___-____, ____ won `

function uefaEuro2016(teams, scores) {
  // conditional
  if (scores[0] > scores[1]) {
    // if score[0] > score[1] team[0] wins
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    // if score[1] > score[0] team[1] wins
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else if (scores[0] === scores[1]) {
    // score[0] === score[1] tie
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}

// 7 kyu Small enough? - Beginner
// task - check if values in a array Less than or equal to limit value, return boolean
// p: a - array of numbers, limit - number
// r: boolean - true or false

function smallEnough(a, limit) {
  //  iterate through all values in array and check if they ALL meet condition .every()
  return a.every((elem) => elem <= limit);
}
