// Disemvowel Trolls

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  return str
    .split('')
    .filter((elem) => {
      return !vowels.includes(elem);
    })
    .join('');
}
