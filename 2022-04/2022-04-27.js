//  8 kyu Find Multiples of a Number
function findMultiples(integer, limit) {
  result = []
  for (let i = integer; i <= limit; i += integer) {
    result.push(i)
  }
  return result
}

// 8 kyu Alan Partridge II - Apple Turnover
function apple(x){
  return Number(x) ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

// 8 kyu Is this my tail?
function correctTail(body, tail) {
  
  sub = body.substr(-1)

  if (sub === tail) { 
    return true
  } else {
    return false
  }
}
  
