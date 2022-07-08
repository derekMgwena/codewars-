/* Jeremy loves mathematics. Yesterday, he found an old math book with over 300+ polynomial expressions that had to be evaluated. Unfortunately, the pages which contained the solutions have been destroyed.

You are given a string representation of a polynomial. Your task is to write a function that evaluates the polynomial for a given value.

Input
A string p that represents the polynomial and r the value to evaluate p.

Output
A string representation of the resulting value.

Restrictions
You may assume that:

The terms of each polynomial do not contain certain order. (eg. 3x^2+5x+2 or 5x+3x^2+2)
You don't have to "combining like terms" or simplify the polynomial.
There is only one indeterminate, a lower case letter that may be followed by a number. (eg. 5y^2+2y+9 or 5x1^2+2x1+9)
Coefficients may be any real number. In case of zero, the term will be excluded from the expression. (eg. 33x^2+x-10.3 or 33x^2+1)
There may be white-spaces between each character. (eg. 2 3x^ 2+x +1)
p is never empty string.
r may be any real number.
Notes:

The exponent is represented by ^ symbol. (eg. 3x^2+5x+2)
For simplicity, the results must be formated using fixed-point notation of 2 digits.*/
function solvePolynomial(p,r){
  const ix = p.replace(/ /g,'').replace(/([a-z])\d+(?!\d)/g,'$1').match(/[+-]?\d*\.?\d*[a-z]?\^?\d*/g);
  const res = ix.reduce((a,e) => {
    const z = Array.from(e).findIndex(v => /[a-z]/.test(v));
    if (z < 0){return a + Number(e)}
    const pre = e.slice(0,z),
        m = !z ? 1 : /\d+/.test(pre) ? Number(pre) : Number(pre+1),
        q = e.slice(z+1)[0] === '^' ? Number(e.slice(z+2)) : 1;
    return a + m * r ** q},0).toFixed(2);
  
  return res === '-0.00' ? res.slice(1) : res;
}