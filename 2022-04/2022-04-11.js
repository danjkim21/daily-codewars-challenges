// 8 Kyu Simple multiplication
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 :  number * 9;
}

// 8 Kyu Transportation on vacation
function rentalCarCost(d) {
    let total = 0;
    
    if (d < 3) {
      total += d * 40;
      
    } else if (d < 7) {
      total += d * 40 - 20;
      
    } else {
      total += d * 40 - 50
      
    }
    return total;
}

// 8 Kyu Function 3 multiplying two numbers
function multiply(a, b) {
    return a * b;
}

// 8 Kyu Count by X
function countBy(x, n) {
    let z = [];
    for (let i = x; i <= x * n; i += x) {
      z.push(i);
    }
    return z;
}