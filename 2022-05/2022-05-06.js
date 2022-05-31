// Codewars Strings Ladder!!!
// 8 kyu Reversed Strings
export function solution(str: string): string {
  return str.split('').reverse().join('');
}

// 7 kyu Sort the Gift Code
function sortGiftCode(code){
  return code.split('').sort().join('');
}

// 6 kyu Stop gninnipS My sdroW!
function spinWords(string){
  return string.split(' ').map(elem => {
    if (elem.length >= 5) {
      return elem.split('').reverse().join('');
    } else {
      return elem;
    }
  }).join(' ');
}

// 7 kyu Greet Me
var greet = function(name) {
  let nameCap = name[0].toUpperCase() + name.substring(1).toLowerCase();
  return `Hello ${nameCap}!`;
};

// 8 kyu Remove the time
function shortenToDate(longDate) {
  return longDate.split(', ').slice(0, 1).join()
}