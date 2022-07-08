/* DESCRIPTION:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Give you a number sequence seq(array format), make a n*(n+1) matrix using these number and their square:

seq = [1,2,3,4,5,6]
Fill these numbers to the upper left triangle region of the matrix:
[
[1,2,3],
[4,5,?],
[6,?,?],
[?,?,?]
]
And then fill their square to the lower right triangle region of the matrix:
[
[ 1, 2, 3],
[ 4, 5, 1],
[ 6, 4, 9],
[16,25,36]
]
If the length of seq is invalid(Can not form a triangle),return [].

The valid length such as 1,3,6,10,15
can form a triangle such as:
1     3     6      10      15      ....
x    xx     xxx    xxxx    xxxxx
     x      xx     xxx     xxxx
            x      xx      xxx
                   x       xx
                           x
Some examples:
makeMatrix([2]) should return: 
[
[2],
[4]
]

makeMatrix([2,4,6]) should return:
[
[ 2, 4],
[ 6, 4],
[16,36]
]

makeMatrix([9,8,7,6,5,4]) should return:
 [
 [ 9, 8, 7],
 [ 6, 5,81],
 [ 4,64,49],
 [36,25,16]
 ]
 
 makeMatrix([9,8,7,6,5,4,3]) should return []
 */
 function makeMatrix(seq) {
  seq = seq.slice()
  let squares = seq.map(x => x * x)
  let res = []
  let n = Math.floor(Math.sqrt(seq.length * 2 + .25))
  if (n * (n+1) / 2 != seq.length) return []
  
  for (let i = 0; i <= n; ++i)
    res.push(seq.splice(0, n-i).concat(squares.splice(0, i)))
  return res
}