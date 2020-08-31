/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
  var output = input.map(bigeven);
  
  function bigeven(value, index, array) {
    var num = 0;
    var x;
    for (x of array){
      if (x > value && x % 2 === 0){
        num += 1;
      }
    }
    return num;
  };
  return output;
};