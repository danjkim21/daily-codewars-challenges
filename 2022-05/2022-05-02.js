// 8 kyu Find the Remainder
function remainder(n, m){
  return n > m ? n % m : m % n;
}

// 8 kyu Surface Area and Volume of a Box
function getSize(width, height, depth) {
  let area = (2 * depth * width) + (2 * depth * height) + (2 * height * width);
  let volume = width * height * depth;
  return [area, volume];
}

// 8 kyu Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}