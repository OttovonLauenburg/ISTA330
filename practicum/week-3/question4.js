/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

/*var powerSet = function(input) {
  var powerset = [];
  for (let i in input){
      var subset = [input[i]];
	  powerset.push(subset);
	  for (let j in input.slice(i,input.length)){
	     console.log(i);
		 
		 if (input[i] !== input.slice(i,input.length)[j]){
		   var subset2 = [];
		   subset2.push(input[i],input.slice(i,input.length)[j]);
		   powerset.push(subset2);
		 }
	     
	  }
  }
  powerset.push([]);
  powerset.push(input);
  return powerset;
};

console.log(powerSet([1,2,3]));*/

/*var x = function(input,n){
    var y = [];
	for (let i = 0;i < input.length; i++){
		let k = 1;
		while (k < input.length){
		    var subarr = [input[i]];
			for (let j = k; j < n && (i + j) < input.length;j ++){
				subarr.push(input[i+j]);

			}
		if (subarr.length === n){
			y.push(subarr);
			}
			k += 1;
		}
		
	}*/
  };

console.log(x())  