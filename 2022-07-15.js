// Split Strings
function solution(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1] === undefined) {
      arr.push(`${str[i]}_`);
    } else {
      arr.push(str[i] + str[i + 1]);
    }
  }
  return arr;
}
