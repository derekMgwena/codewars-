/*In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.*/
function solve(arr){
  let res = []
  let len = arr.length
  for(let i=0; i<len; i++) {
    
    if(i%2===0) {
      let max = Math.max(...arr)
      arr.splice (arr.indexOf(max), 1);
      res.push(max)
      
    }else {
      let min = Math.min(...arr)
      arr.splice (arr.indexOf(min), 1);
      res.push(min)
    }
  }
  return res
};