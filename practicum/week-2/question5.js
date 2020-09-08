/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
  var b = true;
  var c = false;
  for (let i = 0; i < input.length; i ++){
      if (input[i+1] > input[i]){
        b = b && true;
        c = c || true;
      } else if (input[i+1] < input[i]){
        b = b && false;
        c = c || false;
      } else if (input[i+1] === input[i]){
        b = b && true;
        c = c || false;
      }
  }
  if (b === true || c === false){
    return true;
  }
  return false;
};

console.log('hi');