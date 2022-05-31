// 7 kyu Return the Missing Element
// look into the array from 0 - 9 and find the missing integer
// p: array of integers from 0 - 9
// r: the missing integer

function getMissingElement(superImportantArray) {
  // create an array of all possible integers to look for (0 - 9)
  let possibleIntsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // filter all integers from possibleIntsArray that are NOT included in superImportantArray
  let val = possibleIntsArray.filter(
    (elem) => superImportantArray.includes(elem) === false
  );
  return val[0];
}
