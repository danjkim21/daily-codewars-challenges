// 8 kyu Return the day
function whatday(num) {
  switch (num) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}

// 8 kyu Closest elevator
function elevator(left, right, call) {
  let leftDist = Math.abs(call - left);
  let rightDist = Math.abs(call - right);

  if (leftDist > rightDist) {
    return 'right';
  } else if (rightDist > leftDist) {
    return 'left';
  } else {
    return 'right';
  }
}

// 8 kyu Training JS #8: Conditional statement--switch
function howManydays(month) {
  var days;
  switch (month) {
    default:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  return days;
}

// 8 kyu Return to Sanity
function mystery() {
  var results = { sanity: 'Hello' };
  return results;
}
