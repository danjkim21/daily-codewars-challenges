//Be Concise I - The Ternary Operator
describeAge = (age) => {
  let s = "You're a(n) ";
  return age < 13
    ? s + 'kid'
    : age < 18
    ? s + 'teenager'
    : age < 65
    ? s + 'adult'
    : s + 'elderly';
};

// Simple Comparison?
function add(a, b) {
  return +a == b;
}

// Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.abs(b.y - a.y) ** 2 + Math.abs(b.x - a.x) ** 2);
}
