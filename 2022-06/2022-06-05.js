// 8 kyu Find the lucky numbers
var filterLucky = (x) => {
  return x
    .map(String)
    .filter((elem) => elem.includes(7))
    .map(Number);
};
