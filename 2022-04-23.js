// 8 Kyu Capitalization and Mutability
function capitalizeWord(word) {
  word[0].toUpperCase() + word.slice(1);
}

// 8 Kyu The Wide-Mouthed frog!
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
