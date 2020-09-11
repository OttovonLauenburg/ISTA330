/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
  var sum = 0;
  var len = input.length;
  while (len > 0){
    var maxn = 0;
    var maxin = 0;
    var secondmaxn = 0;
    var secondin = 0;
    for (let i in input){
        if (typeof input[i] !== "undefined" && input[i] > maxn){
            if (maxn > secondmaxn){
                secondmaxn = maxn;
                secondin = maxin;
            }
            maxn = input[i];
            maxin = i;
        }  else if (typeof input[i] !== "undefined" && input[i] < maxn && input[i] > secondmaxn){
            secondmaxn = input[i];
            secondin = i;
        }
    }
    delete input[maxin];
    sum += secondmaxn;
    delete input[secondin];
    len -= 2;
  }
  
  return sum;
};

