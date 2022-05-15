// 7 kyu Flatten and sort an array
// flatten arrays of array into one main array and sort by integer
// P: array that contains arrays of integers, positive?
// R: 1 array that is sorted by integer

function flattenAndSort(array) {
  // flatten array by using either flat() or
  // reduce the array by concatentating the values starting with the array
  let arrayFlat = array.reduce((acc, val) => acc.concat(val), []);
  // Then sort the flattened array by integer
  return arrayFlat.sort((a, b) => a - b);
}

// 7 kyu Check the exam
// There are two arrays, check if each element in the same index of the two arrays match.
// If they match, give +4, incorrect -1, blank 0
// P: two arrays (answers, studentAnswers), containing 4 elements each, a-z, blank strs.
// R: integer > 0

function checkExam(array1, array2) {
  // Define total
  let total = 0;
  // Iterate through test array2
  array2.forEach((elem, ind) => {
    // Compare each element by index position
    // Conditional - if element is blank > return 0 to total
    if (elem === '') {
      total += 0;
      // if elem from each array are equal > add 4
    } else if (elem === array1[ind]) {
      total += 4;
      // if elem from each array are !equal > sub 1
    } else if (elem !== array1[ind]) {
      total -= 1;
    }
  });
  // return total > 0
  if (total < 0) {
    return 0;
  } else {
    return total;
  }
}
