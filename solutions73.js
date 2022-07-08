/*No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!*/
function equalize(array){
  return array.map( n => {
    if(n < array[0]){
      return (n - array[0]).toString();
    }
    else {
      return "+" + (n - array[0]).toString();
    } 
    })
    
  };