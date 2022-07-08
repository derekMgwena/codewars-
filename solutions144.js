/* 
DESCRIPTION:
You are to write a function biggestNum() that takes as argument two numbers (passed as strings) and returns the biggest (written as a string).

Note the numbers can be negative and/or very large. They can also have leading zeros and multiple negative signs, but your answers should be written without those.

Good luck!*/
//Biggest Number (with Strings)
function biggestNum(a, b) {
  a=a.replace(/^-+/, x=>x.length%2==0?"":"-");
  b=b.replace(/^-+/, x=>x.length%2==0?"":"-");
  let [p,q] = [BigInt(a), BigInt(b)];
  return p > q ? p.toString() : q.toString();
}

