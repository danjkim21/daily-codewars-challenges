// 8 kyu - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

// 8 Kyu - Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  distanceActual = mpg * fuelLeft;
  return distanceActual >= distanceToPump ? true: false;
};

// 8 Kyu - Array plus array?
function arrayPlusArray(arr1, arr2) {
  let arr1Sum = arr1.reduce((acc,c) => acc + c, 0);
  let arr2Sum = arr2.reduce((acc,c) => acc + c, 0);
  return arr1Sum + arr2Sum;
}