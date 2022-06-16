// Multiples of 3 or 5

function solution(number) {
  let total = [];
  if (number) {
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 && i % 5) {
        total.push(i);
      } else if (i % 3 === 0) {
        total.push(i);
      } else if (i % 5 === 0) {
        total.push(i);
      }
    }
  } else {
    return 0;
  }

  return total.reduce((acc, c) => acc + c, 0);
}
