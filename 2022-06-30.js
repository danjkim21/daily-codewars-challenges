// Building Strings From a Hash
function solution(pairs) {
  let str = [];
  for (elem in pairs) {
    str.push(`${elem} = ${pairs[elem]}`);
  }
  return str.join(',');
}

// Sum of Cubes
function sumCubes(n) {
  let values = 0;
  for (let i = 1; i <= n; i++) {
    values += i ** 3;
  }
  return values;
}
