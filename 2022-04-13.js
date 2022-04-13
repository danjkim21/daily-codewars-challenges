// 8 kyu Can we divide it?
function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

// 8 kyu Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

// 8 kyu Sum Mixed Array
function sumMix(x){
  return x.map(elem => Number(elem)).reduce((acc, c) => acc + c, 0);
}

// 8 kyu Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}