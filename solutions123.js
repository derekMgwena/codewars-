/* DESCRIPTION:
#Task You're given an array arr. Apply the following algorithm to it: find intervals of consecutive prime numbers and consecutive non-prime numbers; replace each such interval with the sum of numbers in it; if the resulting array is different from the initial one, repeat the process; otherwise return the resulting array.
Note: here non-prime numbers include 0, 1 and all negative numbers.

#Input/Output

[input] integer array arr

A non-empty array.

1 ≤ arr.length ≤ 1000

abs(arr[i]) ≤ 10000

[output] an integer array
The resulting array.

#Example
For arr = [1, 2, 3, 5, 6, 4, 2, 3], the output should be [21, 5]

[1,2,3,5,6,4,2,3] --> [1, 2 + 3 + 5, 6 + 4, 2 + 3] --> [1, 10, 10, 5]
[1, 10, 10, 5] --> [1 + 10 + 10, 5] --> [21,5]```

For `arr = [-3, 4, 5, 2, 0, -10]`, the output should be `[1, 7, -10]`
[-3, 4, 5, 2, 0, -10] --> [-3+4, 5+2, 0+-10] --> [1, 7, -10] ```*/
Object.defineProperty( Array.prototype, "groupBy", { value: function(pred) { let a = this; return a.some( (_,i) => pred(a[0])!==pred(a[i]) && ( a = [ a.slice(0,i), ...a.slice(i).groupBy(pred) ] ) ) ? a : [ a.slice() ] ; } } );

function simplifiedArray(a) {
  function isPrime(n) {
    if ( n<=3 ) return n>=2;
    if ( n%2===0 || n%3===0 ) return false;
    for ( var i=5; i*i<=n; i+=6 ) if ( n%i===0 || n%(i+2)===0 ) return false;
    return true;
  }
  const plus = (v,w) => v+w ;
  const sum = a => a.reduce(plus,0) ;
  const b = a.groupBy(isPrime).map(sum);
  if ( a.length===b.length )
    return a;
  else
    return simplifiedArray(b);
}