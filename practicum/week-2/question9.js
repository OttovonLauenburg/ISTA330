/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
  var x = 10;
  var digitsum = [];
  while (x <= n){
    digitsum.push((Math.floor(x/10)) + (x%10));
    x += 1;
  }

  var max = 0;
  var obj = {};
  for (let y of digitsum){
    if (y >= 1 && y <= 9){
        if (y in obj === false){
            obj[y] = 1
        }
        obj[y] += 1;
        if (obj[y] > max){
            max = obj[y];
        }
    }
  }

  var count = 0;
  for (let z in obj){
    if (obj[z] === max){
        count += 1;
    }
  }
  return count;
};
