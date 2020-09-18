/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {
	var int = 0;
	var obj = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};

	for (let x in obj){
		for (let y in obj){
		    indx = s.indexOf(x);
			indy = s.indexOf(y);
			indx1 = s.lastIndexOf(x);
			indy1 = s.lastIndexOf(y);
			if (indx !== -1 && indy !== -1 && indx1 !== -1 && indy1 !== -1){
				if (obj[x] < obj[y]){
					if(indx < indy || indx1 < indy1){
						int += obj[y]-obj[x];
						s = s.replace(x+y,'');
						console.log(x,y);
					}
				}
			}
		}
	}
	for (let char of s){
		if (char in obj){
			int += obj[char];
		}
	}
	return int;
};
