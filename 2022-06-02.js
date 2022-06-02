// 8 kyu Grader
function grader(score) {
  if (score > 1 || score < 0.6) {
    return 'F';
  } else if (score >= 0.9) {
    return 'A';
  } else if (score >= 0.8) {
    return 'B';
  } else if (score >= 0.7) {
    return 'C';
  } else if (score >= 0.6) {
    return 'D';
  }
}

// 8 kyu Barking mad
function Dog(breed) {
  this.breed = breed;
}
Dog.prototype.bark = function () {
  return 'Woof';
};
var snoopy = new Dog('Beagle');
var scoobydoo = new Dog('Great Dane');

// 8 kyu Name on billboard
function billboard(name, price = 30) {
  total = 0;
  name.split('').forEach((elem) => (total += price));
  return total;
}

// 8 kyu NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
  return ppg === 0 || mpg === 0 ? 0 : +(ppg * (48 / mpg)).toFixed(1);
}

// 8 kyu Find out whether the shape is a cube
var cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  } else {
    return side ** 3 === volume;
  }
};

// 8 kyu Find the Integral
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}
