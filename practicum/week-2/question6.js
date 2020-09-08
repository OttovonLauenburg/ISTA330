/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
  var valuestat = {};
  for (let i of input){
    if (i in valuestat === false){
      valuestat[i] = 0;
    }
    valuestat[i] += 1;
  }
  
  console.log(valuestat);
  for (let j in valuestat){
    if (valuestat[j] >= (input.length / 2)){
      return j;
    }
  }
  return -1;
};