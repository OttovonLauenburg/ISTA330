var fs = require('fs');

console.log('Program started.');
let wait = (ms) => {
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
 console.log('The wait is over.');
}

let doSomething = (data) => {
    console.log(`number of the characters: ${data ? data.length : data}`);
}

let readFromTheFile = () => {
  fs.readFile('test1.txt', (error, data) => 
  {
     if(error) {
       console.log(`something went wrong: ${error}`);
     }
     console.log(`The file was read.`);     
     return data;
  });
}
let result = readFromTheFile();
doSomething(result);

console.log('Program finished.');

