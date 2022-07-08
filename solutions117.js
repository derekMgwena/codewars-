/* DESCRIPTION:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Given an unsorted array arr that contains some positive integers. It may be one of the following:

1. There are numbers 1 to n, only one number is 
   duplicate(repeated two times), the other numbers are unique. 
   That is, there are n+1 elements in the array. 
   e.g. [1,2,3,6,5,4,1]

2. There are numbers 1 to n, only one number is 
   unique, the other numbers are repeated two times. 
   That is, there are 2*n-1 elements in the array. 
   e.g. [1,2,3,1,2,3,4]
Your task is to determine the type of the array, if it is the first type, to return the duplicate; if it is second type, return the unique.

Note:
All numbers are positive integers that from 1 to n;
The length of array always more than 5;
Please pay attention to optimizing the code to avoid time out.
In the performance test(1000000 elements x 100 testcases), the time consuming of each test case should be within 6ms. This means, your code should run as fast as a rocket ;-)
Some Examples
duplicateOrUnique([1,2,3,6,5,4,1]) === 1
duplicateOrUnique([1,2,3,1,2,3,4]) === 4
duplicateOrUnique([3,6,9,2,5,8,1,4,8,7]) === 8
duplicateOrUnique([9,8,7,1,2,3,9,7,1,2,3,4,4,5,5,6,6]) === 8*/
const duplicateOrUnique = arr => {
  let i = arr.length-1, sum = 0;
  for ( ; i >= 0; i--) sum += arr[i];
  const lSum = ((arr.length-1) * arr.length)/2;
  
  if (sum > lSum) {
    return sum-lSum;
  } else {
    const n = (arr.length+1)/2;
    return (n * (n+1))-sum;
  }  
}