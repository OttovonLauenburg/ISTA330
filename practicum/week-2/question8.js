/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
   var stat = {};
   for (let x of input) {
    if (stat.indexOf(x) === -1){
      stat[x] = 0;
     }
     stat[x] += 1;
    }
  
    var d_arr = [];
    for (let y in stat){
      if (Number(y) === stat[y]){
        d_arr.push(stat[y]);
      }
    }
  
    var largest = function(arr){
      let big_n = 0;
      for (let z of arr){
        if (z > big_n){
          big_n = z;
        }
      }
     return big_n;
    };

  if (d_arr.length === 0){
    return -1
  } else if (d_arr.length === 1){
    return d_arr[0];
  } else {
    return Number(largest(d_arr));
  }
  
};