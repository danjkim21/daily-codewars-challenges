// 7 kyu Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// search through array of objects and count total number of JS devs from "Europe"
// P: array with objects - string and integers
// R: integer >0
function countDevelopers(list) {
  // Create counter var
  let count = 0;
  // Iterate through array
  list.forEach((elem, ind) => {
    // Conditional for each object
    // if continent === 'Europe' > +1 to count && language === 'Javascript'
    if (elem['continent'] === 'Europe' && elem['language'] === 'JavaScript') {
      count += 1;
    }
  });
  return count;
}

