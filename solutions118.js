/* DESCRIPTION:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Given two 2D integer array arr1 and arr2. They have the same numbers of rows and columns. For example:

 arr1 = [[1, 3,-5],       arr2 = [[-1,-3, 5],
        [2,-4, 6]]               [-2,-4,-6]]
Then plus two integers of the same position of two array. We can got a new array:

[[0, 0, 0],
  [0,-8, 0]]
Your task is to count the number of zero rows and zero columns(all elements are zero in a row or column).

In the example above, the result is 3(row 0, column 0, and column 2).

Note:
Arguments arr1 and arr2 always be valid inputs;
Please pay attention to optimizing the code to avoid time out.
In the performance test(5000x5000 elements x2 x 100 testcases), the time consuming of each test case should be within 6ms. This means, Your need a faster algorithm, your code should run as fast as a rocket ;-)
Some Examples
arr1=[
[1, 1],
[1, 1]]
arr2=[
[-1,-1],
[10, 9]]
countZeroRowsAndColumns(arr1,arr2) === 1

arr1=[
[1, 2, 3],
[4, 5, 6]]
arr2=[
[-1, -2, -3],
[-4, -5, -6]]
countZeroRowsAndColumns(arr1,arr2) === 5*/
function countZeroRowsAndColumns(a1,a2){
  let out=0, cols=Array(a1[0].length).fill(0);
  for(let i=0;i<a1.length;i++){
    let s=0;
    for(let j=0;j<a1[0].length;j++) if(a1[i][j]+a2[i][j]){ cols[j]++; s++; }
    out+=!s;
  }
  return cols.reduce((s,n)=>s+!n, out);
}