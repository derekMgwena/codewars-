/* Every natural number, n, may have a prime factorization like:

source: imgur.com

We define the geometric derivative of n, as a number with the following value:

source: imgur.com

For example: calculate the value of n* for n = 24500.

24500 = 2²5³7²
n* = (2*2) * (3*5²) * (2*7) = 4200
Make a function, f that can perform this calculation

f(n) ----> n*
Every prime number will have n* = 1.

Every number that does not have an exponent ki, higher than 1, will give a n* = 1, too

f(24500) == 4200

f(997) == 1 */
const f = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    let k = 0; 
    while (n % i == 0) {
      k++;
      n /= i;
    }
    if (k) result *= k * Math.pow(i, k - 1);
  }
  return result;
}