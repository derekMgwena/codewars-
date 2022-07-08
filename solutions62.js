/*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:*/
function getEvenNumbers(numbersArray){  
  for(i=0; i < numbersArray.length; i++){
    if(numbersArray[i] % 2 != 0){
       numbersArray.splice(i,1)
       //Splice causes length of array to be reduced by one. 
       //Value of i must reflect that
       i--;
    };
  };
  return numbersArray;
};
/*function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(n){
    return n % 2 == 0;
  });
}*/