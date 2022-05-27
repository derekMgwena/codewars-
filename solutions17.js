//The task is to calculate the sum of f(x, y), g(x, y) and h(x, y) for all integers x and y such that (1 <= x <= n, 1 <= y <= n).

//The function sumin (sum of f) will take n as a parameter and return the sum of min(x, y) in the domain 1 <= x <= n, 1 <= y <= n. The function sumax (sum of g) will take n as a parameter and return the sum of max(x, y) in the same domain. The function sumsum (sum of h) will take n as a parameter and return the sum of x + y in the same domain.

//Examples:
//sumin(6) --> 91
//sumin(45) --> 31395
//sumin(999) --> 332833500
//sumin(5000) --> 41679167500

//sumax(6) --> 161
//sumax(45) --> 61755
//sumax(999) --> 665167500
//sumax(5000) --> 83345832500

//sumsum(6) --> 252
//sumsum(45) --> 93150
//sumsum(999) --> 998001000
//sumsum(5000) --> 125025000000
//Consider integer coordinates x, y in the Cartesian plan and three functions f, g, h defined by:


function sumin(n, res=0) {
  for (let a = 1; a <= n; a++)
    for (let b = 1; b <= n; b++)
      res += Math.min(a,b)
  return res
}

function sumax(n, res=0) {
  for (let a = 1; a <= n; a++)
    for (let b = 1; b <= n; b++)
      res += Math.max(a,b)
  return res
}

function sumsum(n, res=0) {
  for (let a = 1; a <= n; a++)
    for (let b = 1; b <= n; b++)
      res += a+b
  return res
}