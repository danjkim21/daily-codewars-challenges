//  8 Kyu Palindrome Strings
function isPalindrome(line) {
  let revLine = line.toLowerCase().split('').reverse().join('');
  let normalLine = line.toLowerCase().toString();
  
  return revLine === normalLine ? true : false;
}

// 8 Kyu Grasshopper - Debug
function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c > 0) {
    return (c + " is above freezing temperature")
    }
  else {
    return (c + " is freezing temperature")
    }
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}