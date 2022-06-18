// For the sake of argument
function numbers(...arr) {
  return arr.every((elem) => typeof elem === 'number');
}

// Naughty or Nice?
function getNiceNames(people) {
  let nice = [];
  people.forEach((elem) => {
    if (elem.wasNice === true) {
      nice.push(elem.name);
    }
  });

  return nice;
}
function getNaughtyNames(people) {
  let naughty = [];
  people.forEach((elem) => {
    if (elem.wasNice === false) {
      naughty.push(elem.name);
    }
  });

  return naughty;
}
