/* Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.*/
const fill = (n, f) =>
  Array.apply(null, Array(n)).map((_, i) => f(i));

const squares = n => 
  fill(n, i => Math.pow(i + 1, 2));

const range = (n, start, step) =>
  fill(n, i => start + i * step);

const random = (n, min, max) =>
  fill(n, i => Math.round(min + Math.random() * (max - min)));

const primes = n => {
  let res = [], m = 1;
  
  loop: while (n > res.length) {
    m += 1;
    
    for (let p of res) 
      if (m % p === 0) 
        continue loop;
      
    res.push(m);
  }
  
  return res;   
}