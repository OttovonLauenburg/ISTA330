/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
  var diff = {};
  for (var i of input){
    for (var j of input){
      if (j > i){
        if ((j - i) in diff === false){
          diff[j - i] = [];
        }
        diff[j - i].push([i,j])
        var x = j - i;
      }
    }
  }
  
  var returnarr;
  for (let a in diff){
    if (a < x){
      x = a;
    }
  }
  returnarr = diff[x]
  return returnarr;
};