function solution(string) {
  return string
    .split('')
    .map((elem, ind) => {
      if (elem === elem.toUpperCase()) {
        return ` ${elem}`;
      } else {
        return elem;
      }
    })
    .join('');
}
