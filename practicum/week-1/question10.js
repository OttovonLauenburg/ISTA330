/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  n += "";
  var narr = n.split("");
  
  narr.forEach(tonumber);
  function tonumber(item, index, arr){
    arr[index] = Number(item);
  }
  
  narr.sort(function(a, b){return a - b});
  return narr[narr.length - 1] - narr[0];
};