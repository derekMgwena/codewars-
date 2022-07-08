/*In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.
function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};
*/
//Sum of array singles
function repeats(arr){
  let result = 0;
  
  for(let i = 0; i < arr.length; i += 1) {
    
    const fillArr = arr.filter((elm, idx) => elm === arr[i]);
    
    fillArr.length === 1 ? result += fillArr[0] : 0
  }
    
  return result;
};