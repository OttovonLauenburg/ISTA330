/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if (n > 2){
    n -= 2;
    var returnarr [1,1,1];
    var linegen = function (num, inarr){
      if (num > n){
        return inarr + [1];
      } else if (num <= n){
        var newline = [1];
        returnarr.push(1);
        for (let i = 0; i < inarr.length - 1; i ++){
          newline.push(inarr[i] + inarr[i + 1]);   
          returnarr.push(inarr[i] + inarr[i + 1]);
        }
        newline.push(1);
        returnarr.push(1);
        return linegen(num + 1, newline);
      }
    };
    linegen(1,[1,1]);
    return returnarr;
  } else if (n === 0){
    return [];
  } else if (n === 1){
    return [1];
  } else if (n === 2){
    return [1,1,1];
  }
};