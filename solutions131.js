/* We define the "unfairness" of a list/array as the minimal difference between max(x1,x2,...xk) and min(x1,x2,...xk), for all possible combinations of k elements you can take from the list/array; both minimum and maximum of an empty list/array are considered to be 0.

More info and constraints:

lists/arrays can contain values repeated more than once, plus there are usually more combinations that generate the required minimum;
the list/array's length can be any value from 0 to 106;
the value of k will range from 0 to the length of the list/array,
the minimum unfairness of an array/list with less than 2 elements is 0.
For example:

minUnfairness([30,100,1000,150,60,250,10,120,20],3)==20 //from max(30,10,20)-min(30,10,20)==20, minimum unfairness in this sample
minUnfairness([30,100,1000,150,60,250,10,120,20],5)==90 //from max(30,100,60,10,20)-min(30,100,60,10,20)==90, minimum unfairness in this sample
minUnfairness([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],10)==1 //from max(1,1,1,1,1,1,1,1,1,2)-min(1,1,1,1,1,1,1,1,1,2)==1, minimum unfairness in this sample
minUnfairness([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],10)==0 //from max(1,1,1,1,1,1,1,1,1,1)-min(1,1,1,1,1,1,1,1,1,1)==0, minimum unfairness in this sample
minUnfairness([1,1,-1],2)==0 //from max(1,1)-min(1,1)==0, minimum unfairness in this sample
Note: shamelessly taken from here, where it was created and debatably categorized and ranked. */ 
function minUnfairness(arr,k){
  if (k < 2) { return 0 }
  
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length - k + 1)
    .reduce((pre, cur, i) => Math.min(pre, arr[k + i - 1] - cur), Number.MAX_SAFE_INTEGER)
}