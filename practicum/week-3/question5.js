/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
	var returnarr = input.map(function(obj,i){
	    var product = 1;
		for (let j in input){
			if (Number(j) !== Number(i)){
				product *= input[j];
			}
		}
		return product;
	});
	return returnarr;
};


