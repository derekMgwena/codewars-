/*Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', '
sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

Sort with a sorting array
*/
function sort(initialArray, sortingArray) {
  const arr = [];

  for (let i = 0; i < sortingArray.length; i++) {
      arr[sortingArray[i]] = initialArray[i];     
  }

  return arr;
}

