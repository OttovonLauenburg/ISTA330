/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
  var returnarr = [];
  var len = M[0].length;
  while (len > 0){
    var y = [];
    for (let x of M){
    y.push(x[0]);
    x.shift();
    }
    returnarr.push(y);
    len -= 1;
  }
 return returnarr;
};