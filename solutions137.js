/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/
function isOdd(num) { return num & 1; };

function solution(str){
  let arr = str.match(/.{1,2}/g);
  
  
   if (str.length == 0) {
     return []
   } else if(isOdd(str.length) == 1) {
      let x = str + "_"
      return arr = x.match(/.{1,2}/g);
   } else {
      return arr;
   }
  
}


// Refactored 

function solution(str) {
  if (str.length == 0) {
    return []
  };
  
  return (str.length % 2 ? str + '_' : str).match(/../g);
}