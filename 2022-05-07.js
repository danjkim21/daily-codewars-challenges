// 8 kyu How old will I be in 2099?
function  calculateAge(a, b) {
  if (a - b === 0) {
    return 'You were born this very year!'
  } else if (a - b === 1) {
    return 'You will be born in 1 year.'
  } else if (a - b === -1) {
    return 'You are 1 year old.'
  } else if (a - b > 1) {
    return `You will be born in ${a - b} years.`
  } else if (a - b < -1) {
    return `You are ${Math.abs(a-b)} years old.`
  }
}

