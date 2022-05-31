// 7 kyu Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// appending a new object key,value property to each object in the array
// p: array with multiple objects with key, value property
// r: same array and objects pair with appended key,value property
function greetDevelopers(list) {
  // loop through each object in the array
  list.forEach(elem => {
    // create a new parameter that is a template literal for the text required
    return elem.greeting = `Hi ${elem.firstName}, what do you like the most about ${elem.language}?` 
  })
  // return the list with the appended greeting parameter
  return list
}   
