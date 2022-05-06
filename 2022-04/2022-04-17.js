// 8 Kyu The Feast of Many Beasts
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]; 
}

// 8 Kyu Unfinished Loop - Bug Fixing #1
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

