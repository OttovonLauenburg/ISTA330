/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
  var obj = {};
  for (var i in M){
        for (var j in M[i]){
            if ([i,j] in obj === false){
                obj[[i,j]] = M[i][j];
            }
        }
  }

  return M[[1,0]];

};
console.log(minPath([[1,3,1],[1,5,1],[4,2,1]]));