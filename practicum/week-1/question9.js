/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
  var inarr = input.split("");
  var outarr = [];
  var x;
  var y;
  for (x in inarr){
    for (y in shuffleIndices) {
      if (x === y){
        outarr[shuffleIndices[y]] = inarr[x];
      }
    }
  }
  return outarr.join("");
};