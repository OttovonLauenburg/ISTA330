
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
   var atleastonce = [];
   var twice = [];
   for (let x of input){
     if (atleastonce.indexOf(x) === -1) {
       atleastonce.push(x);
       console.log(x);
     } else {
       twice.push(x);
     }
   }
   return twice;
 };