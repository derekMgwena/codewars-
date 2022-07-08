/*A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true*/
function isAllPossibilities(x){
  if (x.length === 0) return false;
  for (let i = 0; i < x.length; i++) {
  if (x.includes(i) === false) {
    return false;
  }
}
return true;
}

/* P.R.E.P.
Parameters - an arary of numbers. array can be empty, have zeroes or negative numbers in it .
Return - a boolean.
Example -  
  isAllPossibilities([ 0, 2, 19, 4, 4 ])
  isAllPossibilities([3, 2, 1, 0])
  isAllPossibilities([3, 2, 10, 4, 1, 6])
  isAllPossibilities([1, 1, 8, 3, 1, 1 ])

  sample cases work
  isAllPossibilities([0,1,2,3])
  isAllPossibilities([1,2,3,4])
Pseudo Code - 
  if array is empty, return false.
  loop through array
    if the array does not includes the index, return false.
    if it does, continue until the end.
  return true.
*/