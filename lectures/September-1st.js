/*
Programming Language 
1. variables (var, let, const)
2. types (number, string, object, function, undefined)
3. if statements
4. loops (for, while)
*/
let y = 2;
let z = 8;
//console.log(y);
let s = `y is ${y} and z is ${z}`; // "hello!", `hello!`
//console.log(s);
let a = [1,'hello!',3];
a[1] = 'how are you?';
//console.log(a[1]);
let o = {firstName: 'John', lastName: 'Smith'};
o.firstName = 'Fred';
//console.log(o.firstName);
let square = function(n) {return n*n};
//console.log(square(5));
let u = null;
//console.log(typeof u);
if (!u) {
    console.log('first name is Fred.');
}
for (let index = 0; index < 5; index++) {
    console.log(index);    
}
// Given an array of numbers, 
//Write a function that returns the maximum of the array.

