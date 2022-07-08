/* In this Kata, you will be given an array of numbers and a number n, and your task will be to determine if any array elements, when summed (or taken individually), are divisible by n.

For example:

solve([1,3,4,7,6],9) == true, because 3 + 6 is divisible by 9
solve([1,2,3,4,5],10) == true for similar reasons.
solve([8,5,3,9],7) == true, because 7 evenly divides 5 + 9
but solve([8,5,3],7) == false.
All numbers in the array will be greater than 0.

More examples in the test cases.

Good luck!

If you like this Kata, please try:

Simple division

Divisor harmony */
function solve(arr, n) {
  const sums=[0]
  for (let i=0;i<arr.length;i++){
    const l=sums.length
    for (let j=0;j<l;j++){
        const tmp=arr[i]+sums[j]
        if (!(tmp%n)){return true}
        sums.push(tmp)
    }
  }
 return !(arr.reduce((a,b)=>a+b)%n)
};