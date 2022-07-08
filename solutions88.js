/*Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.*/

function multiplyAndFilter(array, multiplier){
  // your code
  let sum =[];
  for(let i= 0; i <array.length; i++) {
    if(typeof array [i] === 'number') {
      sum.push(array[i] * multiplier);
    }
  }
  return sum; 
}