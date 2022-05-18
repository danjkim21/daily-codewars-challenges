// 7 kyu Reverse words
// Reverse each word in the string sentence
// P: string containing multiple words and spaces. No integers
// R: string with each word reversed but in the same position.

function reverseWords(str) {
  // Split string into an array with split()
  let strArr = str
    .split(' ')
    // map over each element and reverse each word
    .map((elem) => {
      elem.split('').reverse().join('');
    })
    //Join the array back as string with join()
    .join(' ');

  return strArr;
}
