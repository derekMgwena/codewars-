/* You are given an sequence of zeros and ones. With each operation you are allowed to remove consecutive equal elements, however you may only remove single elements if no more groups of consective elements remain. How many operations will it take to remove all of the elements from the given sequence?

Example
For arr = [0, 1, 1, 1, 0], the result should be 2.

It can be cleared in two steps:

[0, 1, 1, 1, 0] -> [0, 0] -> [].

For arr = [0, 1, 0, 0, 0], the result should be 3.

It can be cleared in three steps:

[0, 1, 0, 0, 0] -> [0, 1] -> [0] -> []

Note that you can not remove 1 at the first step, because you cannot remove just one element while there are still groups of consective elements (see the rule above ^_^)

Input
An array arr of 0s and 1s.
1 <= arr.length <= 100

Output
The minimum number (integer) of operations.

Special thanks:
Thanks for docgunthrop's solution ;-)*/ 
function arrayErasing(arr) {
  let str = arr.reduce((acc, cur) => {
    cur === acc[acc.length - 1][0] ? acc[acc.length - 1][1]++ : acc.push([cur, 1]);
    return acc;
  }, [[arr[0], 0]])
    .map(i => i[1] > 1 ? 1 : 0)
    .join('');
  let left = str.slice(0, Math.ceil(str.length/2)).lastIndexOf(1);
  let right = str.slice(Math.floor(str.length/2)).indexOf(1);
  let b;
  if(left===-1 && right===-1) b = 0;
  else if(left===-1 || right===-1) {
    b = 1;
    if(str.length%2===0 && (left===-1 && right===0 || right===-1 && left===str.length/2-1)) b = 0;
  }
  else {
    right += Math.floor(str.length/2);
    b = Boolean(2*right-2*left>str.length);
  }
  return Math.floor(str.length/2)+1+b;
}