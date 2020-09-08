/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function(input1, input2, d) {
  let l = 0;
  for (let i of input1){
    var b = true;
    for (let j of input2){
      let k = i - j;
      if (k < 0){
        k *= -1;
      }
      
      if (k > d){
        b = b && true;
      } else {
        b = b && false;
      }
      console.log(b);
    } 
    if (b){
      l += 1;
      console.log(b,l);
      //return i;
    }
  }

  return l;
};