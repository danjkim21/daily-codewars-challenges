// Your order, please
function order(words) {
  obj = {};

  words.split(' ').forEach((word) => {
    if (word.includes('1')) {
      obj[1] = word;
    } else if (word.includes('2')) {
      obj[2] = word;
    } else if (word.includes('3')) {
      obj[3] = word;
    } else if (word.includes('4')) {
      obj[4] = word;
    } else if (word.includes('5')) {
      obj[5] = word;
    } else if (word.includes('6')) {
      obj[6] = word;
    } else if (word.includes('7')) {
      obj[7] = word;
    } else if (word.includes('8')) {
      obj[8] = word;
    } else if (word.includes('9')) {
      obj[9] = word;
    }
  });
  return Object.values(obj).join(' ');
}
