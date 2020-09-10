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
    let stringnum = String(x);
    stringnum.split("");
    y = Number(stringnum[0]) + Number(stringnum[1]);
    digitsum.push(y);
    x += 1;
  }
  
  var count = 0;
  for (let z of digitsum){
    if (z >= 1 && z <= 9){
      count += 1;
    }
  }
  return count;
};