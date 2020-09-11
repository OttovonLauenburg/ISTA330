/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
  var ind = [];
  for (let i in input){
     if (input[i] === 1){
       ind. push(Number(i));
     }
  }

  for (let j = 0; j < ind.length - 1; j ++){
    if ((ind[j + 1] - ind[j]) <= k){
      return false;
    }
  }
  
  return true;
};