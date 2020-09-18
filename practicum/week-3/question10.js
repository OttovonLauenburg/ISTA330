/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
  s = s.split(" ").join("").toLowerCase();
  l = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (let k in s){
        if (l.indexOf(s[k]) === -1){
           s = s.replace(s[k],"");
        }
  }
  for (let i in s){
    if (s[i] !== s[s.length - 1 - i]){
      return false
    }
  }
  return true;
};
