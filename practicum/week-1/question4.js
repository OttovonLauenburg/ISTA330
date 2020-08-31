/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
  var lenA = A.length;
  var lenB = B.length;
  var com = [];
  
  for (i = 0; i < lenA; i ++) {
    for (j = 0; j < lenB; j ++) {
      if (A[i] === B[j]) {
        com.push(A[i]);
      }
    }
  }

  return com.length;
};