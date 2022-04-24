// 8 Kyu Multiplication table for number
function multiTable(number) {
  let table = ''
  for (let i = 1; i <= 10; i++) {
    if (i <= 9) {
      table += `${i} * ${number} = ${i*number}\n`
    } else if (i === 10) {
      table += `${i} * ${number} = ${i*number}`
    }    
  }
  return table
}

// 8 Kyu Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
  let savings = normPrice * (discount/100);
  return Math.floor(hol / savings);
}

// 8 Kyu Vowel remover
function shortcut (string) {
  return string.replace(/a|e|i|o|u/g, "")
}

// 8 Kyu Training JS #1: create your first JS function and print "Hello World!"
function helloWorld () {
  var str = 'Hello World!';
  console.log(str);
}