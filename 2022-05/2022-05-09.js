// 8 kyu Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {  
  let catYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
    } else if (i === 2) {
      catYears += 9;
    } else {
      catYears +=4;
    }
  }
      
  let dogYears = 0;
    for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      dogYears += 15;
    } else if (i === 2) {
      dogYears += 9;
    } else {
      dogYears +=5;
    }
  }
  
  return [humanYears,catYears,dogYears];
}
