// Sum of angles
function angle(n) {
  return (n - 2) * 180;
}

// Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  let nonAlpha = ['1','2','3','4','5','6','7','8','9','0', '!', '?', '$', '%', '&', '@', '\\','-', '.', ',', '#', '(', ')', '{', '}', '[', ']', '|', '+', '=', '_', '^', '/', '&', '*', ' ']
  
  return str
    .split('')
    .filter(elem => !nonAlpha.includes(elem))
    .reverse()
    .join('');
}

// Fix string case
function solve(s) {
  let countUpper = s.split('').filter(elem => elem == elem.toUpperCase()).length;
  let countLower = s.split('').filter(elem => elem == elem.toLowerCase()).length;
  
  if (countUpper > countLower) {
    return s.toUpperCase()
  } else {
    return s.toLowerCase()
  } 
}