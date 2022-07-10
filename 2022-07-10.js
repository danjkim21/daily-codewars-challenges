function toCamelCase(str) {
  let arr;

  if (str.includes('-')) {
    arr = str.split('-');
  } else if (str.includes('_')) {
    arr = str.split('_');
  } else {
    return '';
  }

  let arr2 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr2 += arr[i][0].toUpperCase() + arr[i].slice(1, i.length);
  }
  return arr2;
}
