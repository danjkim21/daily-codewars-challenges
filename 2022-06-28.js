//
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let agesArr = [age1, age2, age3, age4, age5, age6, age7, age8];

  return Math.floor(
    Math.sqrt(agesArr.map((age) => age * age).reduce((acc, c) => acc + c, 0)) / 2
  );
}
