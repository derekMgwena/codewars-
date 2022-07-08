/* In this kata, you must write a function that expects a two-dimensional list matrix (minimum size: 2 x 2) as the only argument. The return value will be a two-dimensional list (size: 2 x 2) showing only the corners after n clockwise rotations.

Examples of corner values, rotation and corners-only return value: invalid as a kata test case, demonstration only!

# corners = 1, 2, 3, 4
# non-corners = 0
[[1, 0, 2],
 [0, 0, 0],
 [4, 0, 3]]

# above 2D list after a single clockwise rotation
[[4, 0, 1],
 [0, 0, 0],
 [3, 0, 2]]

# return value of above 2D list showing only the corners
[[4, 1],
 [3, 2]]
The total number of clockwise rotations, n, is equal to the sum of all corner values multiplied by the sum of all non-corner values.

Values in matrix are ASCII characters, booleans or integers. Use the integer values when determining the corner/non-corner sums.

In the case of ASCII characters, use the corresponding ASCII value. A == 65, Z == 90, etc
In the case of booleans, use the corresponding integer value. True/true == 1, False/false == 0
matrix will always be a two-dimensional list (minimum size: 2 x 2)

If the initial size of matrix is 2 x 2, no rotation is needed.

Examples:

rotateCorners([[1, 2], [3, 4]]) == [[1, 2], [3, 4]]
rotateCorners([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [[1, 3], [7, 9]]
rotateCorners([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'z']]) == [['g', 'a'], ['z', 'c']]
rotateCorners([['!', ':', 7, '^'], [997, 'T', '<', '+'], [47, 'v', 531, 'Q'], ['{', '[', ']', '}']]) == [['}', '{'], ['^', '!']]
rotateCorners([[true, 77, false], ['$', '^', 972]]) == [[false, 972], [true, '$']]
This is my first authored kata. Any feedback/suggestions would be appreciated!*/
const getValue = (x) => typeof x === "string" ? x.charCodeAt() : Number(x);

const rotateCorners = (matrix) => {
  const x = matrix.length - 1;
  const y = matrix[0].length - 1;
  const corners = [matrix[0][0], matrix[0][y], matrix[x][y], matrix[x][0]];
  const sum = matrix.reduce((s, r, i) => {
    r.forEach((c, j) => {
      if ((i === x || i === 0) && (j === 0 || j === y)) return;
      s += getValue(c);
    });
    
    return s;
  }, 0);
  const rotations = (corners.reduce((s, v) => s + getValue(v), 0) * sum) % 4;
  const rotated = corners.slice(-rotations).concat(corners.slice(0, -rotations));

  return [rotated.slice(0, 2), rotated.slice(2).reverse()];
};