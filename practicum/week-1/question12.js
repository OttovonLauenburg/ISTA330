/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var inarr = input.split("");
  var index = [0];
  for (i = 0; i < input.length - 1; i ++){
    if (inarr[i] !== inarr[i + 1]){
      index.push(i + 1);
    }
  }
  
  var letternum = [];
  for (x = 0; x < index.length - 1; x ++){
    letternum.push(index[x + 1] - index[x]);
  }
  letternum.push(input.length - index[index.length - 1]);

  
  var balancenum = [];
  for (var j in letternum){
    j = Number(j);
    if (j % 2 === 0){
      if (letternum[j] <= letternum [j + 1]){
        balancenum.push(letternum[j] * 2)
      } else if (letternum[j] > letternum[j + 1]){
        balancenum.push(letternum[j + 1]*2)
      }
    }
  }
  let a = 0;
  for (let b of balancenum){
    if (b > a){
      a = b;
    }
  }
  return a;
};
