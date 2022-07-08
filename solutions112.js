/* This is the challenge version of coding 3min series. If you feel difficult, please complete the simple version

Task
Give you an obj, it can be 3 types: string, number and number array, Check that they are symmetrical or not, return a boolean value.

Example
obj=""    return true   (Empty string should return true)
obj="1"   return true   (one char should return true)
obj="11"  return true
obj="12"  return false
obj="121" return true
obj=1     return true   (number<10  should return true)
obj=-1    return false  (negative number should return false)
obj=10    return false
obj=11    return true
obj=12    return false
obj=121   return true
obj=[]    return true  (Empty array should return true)
obj=[1]   return true  (an array with one element should return true)
obj=[1,2,3,4,5]      return false  
obj=[1,2,3,2,1]      return true
obj=[11,12,13,12,11] return true   (left element = right element)
obj=[11,12,21,11]    return false  (not verify them as a string)
Code length calculation
In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.

For example:

If you typed sc=x=>x+1
after compile, it will be:sc=function(x){return x+1;}

Series
Bug in Apple
Father and Son
Jumping Dutch act
Planting Trees
Reading a Book
Eat watermelon
Special factor
Symmetric Sort
Are they symmetrical?
Guess the Hat
Find the murderer
Give me the equation
Balance Attraction
Max Value
Regular expression compression
Remove screws I
Remove screws II
Collatz Array(Split or merge)
Trypophobia
Virus in Apple
Waiting for a Bus
Tidy up the room*/
function sc(o){
  if(!Array.isArray(o))o=(o+'').split('')
  return o+''==o.reverse()+''
}