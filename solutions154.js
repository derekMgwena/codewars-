/* Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 200000000000000) return sum of all '1' occurencies in binary representations of numbers between 'left' and 'right' (including both)

Example:
countOnes 4 7 should return 8, because:
4(dec) = 100(bin), which adds 1 to the result.
5(dec) = 101(bin), which adds 2 to the result.
6(dec) = 110(bin), which adds 2 to the result.
7(dec) = 111(bin), which adds 3 to the result.
So finally result equals 8.
WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!*/
//
function countOnesSingle(n) {
  let result = 0;
  while (n > 0) {
    let k = Math.log2(n) | 0;
    result += 2 ** (k - 1) * k + 1;
    n = n - 2 ** k;
    result += n;
  }
  return result;
}

function countOnes(left, right) {
  return countOnesSingle(right) - countOnesSingle(left - 1);
}