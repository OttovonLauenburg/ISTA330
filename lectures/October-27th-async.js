var fs = require('fs');

console.log('Program started.');

let doSomething = (data) => {
    console.log(`number of the characters: ${data ? data.length : data}`);
}

let readFromTheFile = (resolve, reject) => {
  fs.readFile('test1.txt', (error, data) => 
  {
     if(error) {
       reject(`something went wrong: ${error}`);
     }
     console.log(`The file was read.`);     
     resolve(data);
  });
}
let wrap = (resolve, reject) => {
    readFromTheFile(resolve, reject);
}
new Promise(wrap).then(x => doSomething(x)).catch(e => console.log(e));

console.log('Program finished.');

