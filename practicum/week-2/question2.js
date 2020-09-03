
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
  var arrsum = [];
  for (let i = 0; i < input.length; i ++) {
    for (let j = i; j < input.length; j ++) {
      var subsum = 0;
      for (let k = i; k <= j; k ++){
        subsum += input[k];
      }
      arrsum.push(subsum);
    }
  }
  var maxsum = 0;
  for (let x of arrsum){
    if (x > maxsum){
      maxsum = x;
    }
  }
  return maxsum;  
    
 };
