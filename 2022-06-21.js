// Good vs Evil
function goodVsEvil(good, evil) {
  const goodSum = good
    .split(' ')
    .map((elem, ind) => {
      switch (ind) {
        case 0:
          return elem * 1;
        case 1:
          return elem * 2;
        case 2:
          return elem * 3;
        case 3:
          return elem * 3;
        case 4:
          return elem * 4;
        case 5:
          return elem * 10;
      }
    })
    .reduce((acc, c) => +acc + +c, 0);

  const evilSum = evil
    .split(' ')
    .map((elem, ind) => {
      switch (ind) {
        case 0:
          return elem * 1;
        case 1:
          return elem * 2;
        case 2:
          return elem * 2;
        case 3:
          return elem * 2;
        case 4:
          return elem * 3;
        case 5:
          return elem * 5;
        case 6:
          return elem * 10;
      }
    })
    .reduce((acc, c) => +acc + +c, 0);

  if (goodSum > evilSum) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilSum > goodSum) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}
