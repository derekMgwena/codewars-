/* 
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
Random Tests
100 tests with 1 - 10 intervals from the range [-20, 20]
100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]*/
/*function sumIntervals(intervals){
  //TODO
  uniqueArr = [];
  intervals.forEach(function(element) {
    for  (var i = element[0]; i < element[1]; i++){
      uniqueArr.push(i)
    }
  });

  uniqueArr = [...new Set(uniqueArr)];
  return uniqueArr.length;
}*/
function sumIntervals(xs) {
  let ys = xs.sort(([a,b], [c,d]) => a-c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a,b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b-m);
    m = Math.max(m, b);
  }
  return res;
}

