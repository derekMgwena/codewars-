/* We have 3 equations with 3 unknowns x, y, and z and we are to solve for these unknowns.

Equations 4x -3y +z = -10, 2x +y +3z = 0, and -x +2y -5z = 17 will be passed in as an array of [[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]] and the result should be returned as an array like [1, 4, -2] (i.e. [x, y, z]).

Note: In C++ do not use new or malloc to allocate memory for the returned variable as allocated memory will not be freed in the Test Cases. Setting the variable as static will do. */
function solveEq(eq){
  for(let x = -2; x <= 100; x++)
      for(let y = -2; y <= 100; y++)
         for(let z = -2; z <= 100; z++)
            if(eq[0][0] * x + eq[0][1] * y + eq[0][2] * z == eq[0][3] &&
               eq[1][0] * x + eq[1][1] * y + eq[1][2] * z == eq[1][3] &&
               eq[2][0] * x + eq[2][1] * y + eq[2][2] * z == eq[2][3])
               return [x, y, z];
}