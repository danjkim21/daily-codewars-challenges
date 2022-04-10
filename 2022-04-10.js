// 7 Kyu Credit Card Mask
// return masked string
function maskify(cc) {
  cc = cc.split('')
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = '#';
  }
  return cc.join('')
}

// 7 Kyu Friend or Foe?
function friend(friends){
  return friends.filter((elem) => elem.length === 4)
}