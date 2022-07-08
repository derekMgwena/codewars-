/*Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2 */
function greatestCommonFactor(array) {
  function gcf(a, b) {
    if (b === 0) return a;
    return gcf(b, a % b);
  }
  return array.reduce(gcf);
};