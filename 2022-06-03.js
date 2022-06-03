// 8 kyu Template Strings
var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

// 8 kyu Ensure question
function ensureQuestion(s) {
  if (s.length === 0) {
    return '?';
  } else {
    return s[s.length - 1] === '?' ? s : s + '?';
  }
}

// 8 kyu ES6 string addition
function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}

// 8 kyu Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((elem) => elem.split('').join(separator))
    .join(' ');
}

// 8 kyu Return Two Highest Values in List
function twoHighest(arr) {
  return [...new Set(arr)]
    .sort((a, b) => b - a)
    .slice(0, 2);
}
