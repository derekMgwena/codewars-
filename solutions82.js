/*It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

For example:

orArrays([1,2,3],[1,2,3]) === [1,2,3]
orArrays([1,2,3],[4,5,6]) === [5,7,7]
orArrays([1,2,3],[1,2]) === [1,2,3]
orArrays([1,2],[1,2,3]) === [1,2,3]
orArrays([1,2,3],[1,2,3],3) === [1,2,3]
 */
function orArrays(arr1, arr2, opt) {
  let x = [arr1, arr2].sort((a,b) => a.length-b.length);
  while (x[0].length < x[1].length) {
    x[0].push(opt);
  }
  return x[0].map((a,b) => a|x[1][b]);
}