// 8 kyu Grasshopper - Terminal game combat function
function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

//  8 kyu Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  return string.endsWith("!") ? string.substring(0, string.length - 1) : string;
}