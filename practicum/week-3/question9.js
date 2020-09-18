/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
  var obj = {};
  for (let x of A){
		if (x in obj === false){
		   obj[x] = 0
		}
		obj[x] += 1;
  }

  var count = 0;
  for (let x in obj){
    if (obj[x] > 1){
        while (x in obj === true){ 
            x = Number(x)
            x += 1;
            count += 1;
        }
        obj[x] = 1;
    }
  }
  return count;
};
