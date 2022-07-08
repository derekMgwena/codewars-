/*In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.
Working with arrays I (and why your code fails in some katas)
*/
//Working with arrays I (and why your code fails in some katas)
function withoutMax(arr) {
  // Fix it
  // arr.pop(); // removes the last element
  return arr.slice(0,-1);
}