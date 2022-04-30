// 7 kyu Categorize New Member
function openOrSenior(data){
  let total = []
  data.forEach((elem, ind) => {
    if (elem[0] >= 55 && elem[1] > 7) {
      total.push('Senior')
    } else {
      total.push('Open')
    }
  })
  return total
}

// 7 kyu String ends with?
function solution(str, ending){
  let endsWith = str.substring(str.length - ending.length);
  return endsWith === ending;
}