// 8 kyu Area or Perimeter
const areaOrPerimeter = function(l , w) {
  return l === w ? l*w : l*2 + w*2;
};

//  8 kyu If you can't sleep, just count sheep!!
var countSheep = function (num){
  let count = "";

  if (num === 0) {
    return count;
  } else {
    for (let i = 1; i <= num; i++) {
      count += `${i} sheep...`;
    }
  }

  return count;
}

//  8 kyu Grasshopper - Personalized Message
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// 8 kyu Quarter of the year
const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
}