// 8 kyu Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// 8 kyu Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

// 8 kyu Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3)/3
  if (avg < 60) {
    return 'F'
  } else if (avg < 70) {
    return 'D'
  } else if (avg < 80) {
    return 'C'
  } else if (avg < 90) {
    return 'B'
  } else {
    return 'A'
  }
}

// 8 kyu Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}