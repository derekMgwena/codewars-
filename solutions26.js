/*Implement a function which receives a list of values lst and a function fn as its arguments, and returns a new list where the i-th element is the result of left-reducing the first i+1 elements of lst using fn.*/

/*Assuming lst[:n] syntax represents taking the first n elements of lst, the function which you should implement must produce the following result:

[
  reduce(lst[:1], fn),
  reduce(lst[:2], fn),
  reduce(lst[:3], fn),
  ...,
  reduce(lst, fn)
]*/

//Running functions
function running(lst, fn) {
  console.log(lst)
  let res = [lst[0]]
  for(let i = 1; i < lst.length; i++)
    res.push(fn(res[i-1], lst[i]))
  return res
}