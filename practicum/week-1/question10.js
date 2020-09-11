/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  n += "";
  var narr = n.split("");
  
 var maxn = 0;
 var minn = Number(narr[0]);
 for (let x of narr){
	  if (Number(x) > maxn){
	    maxn = Number(x);
	  }
	  if (Number(x) < minn){
			minn = Number(x);
	  }
 }
  

  return maxn - minn;
};
