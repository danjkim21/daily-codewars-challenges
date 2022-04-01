// 8Kyu You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i*2;
  }

// 8Kyu Jenny's secret message 
function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!";
    } else {
      return "Hello, " + name + "!";
    }
  }

// 8Kyu Invert values
function invert(array) {
    return array.map((a) => {
      if (a >= 0) {
        return -Math.abs(a);
      } else {
        return Math.abs(a);
      }
    });
  }
  