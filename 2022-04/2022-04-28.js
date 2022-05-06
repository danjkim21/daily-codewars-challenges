// 8 kyu Super Duper Easy
function problem(x){
  return typeof x === 'string' ? "Error" : x * 50 + 6;
}

// 8 kyu Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  return n < 5 ? n*100 : n < 10 ? n*95 : n*90;
}

// 8 kyu Triple Trouble
function tripleTrouble(one, two, three){
  let arr = [one, two, three];
  let arrTot = [];
  
  for (let i = 0; i < one.length; i++ ){
    arr.forEach((elem, ind) => {
      arrTot.push(elem[i]);
    })
  }
  return arrTot.join('');
 }

//  8 kyu 5 without numbers !!
function unusualFive() {
  let array = ["asdf", "asdff", "asdfs", "asdfa", "asdfa"]
  return array.length;
}