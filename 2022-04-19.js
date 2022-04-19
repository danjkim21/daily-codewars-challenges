// 8 Kyu Student's Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// 8 Kyu Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs(a.reduce((acc, c) => acc * c) - b.reduce((acc, c) => acc * c)); 
}
// 8 Kyu Correct the mistakes of the character recognition software
function correct(string) {
	let newStr = string.replace(/5/g , 'S').replace(/0/g, 'O').replace(/1/g, 'I')
  return newStr;
}

// 8 Kyu Grasshopper - Check for factor 
function checkForFactor (base, factor) {
  return base % factor !== 0 ? false : true;
}
