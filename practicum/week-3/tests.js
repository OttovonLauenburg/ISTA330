// howManyTeams
const q1 = [{
    input: [[2,5,3,4,1,6]],
    output: 5
},
{
    input: [[2,1,3]],
    output: 0
}];
// findDuplicates
const q2 = [{
    input: [[19,3,2,10,8,2,3,5,4,4]],
    output: [2,3,4],
    setEquality: true 
},
{
    input: [[-17,3,1,5,-9,1,10]],
    output: [1],
    setEquality: true 
}];
// kStepAway
const q3 = [{
    input: [[1,0,0,0,1,0,1,1], 2],
    output: false
},
{
    input: [[1,0,0,1,0,0,0,1], 2],
    output: true
}];
// powerSet
const q4 = [{
    input: [[1,2,3]],
    output: [
        [],   
        [1],
        [2],
        [3],  
        [1,3],
        [2,3],
        [1,2],
        [1,2,3]
      ],
    setEquality: true  
},
{
    input: [[3,2]],
    output: [
        [],
        [3],
        [2],
        [3,2]
    ],
    setEquality: true  
}];
// productOfOthers
const q5 = [{
    input: [[1,2,3,4]],
    output: [24,12,8,6]
},
{
    input: [[7, 10, 5]],
    output: [50, 35, 70]
}];
// longestNested
const q6 = [{
    input: [[5,4,0,3,1,6,2]],
    output: 4
},
{
    input: [[4,3,2,0,1]],
    output: 4
}];
// minPath
const q7 = [{
    input: [[
        [1,3,1],
        [1,5,1],
        [4,2,1]
      ]],
    output: 7
},
{
    input: [[
        [1,2,3],
        [1,4,5],
        [4,3,2]
      ]],
    output: 11
}];
// sortColors
const q8 = [{
    input: [[2,0,2,1,1,0]],
    output: [0,0,1,1,2,2]
},
{
    input: [[0,1,2,1,1,2]],
    output: [0,1,1,1,2,2]
}];
// minMoves
const q9 = [{
    input: [[1,2,2]],
    output: 1
},
{
    input: [[3,2,1,2,1,7]],
    output: 6
}];
// isPalindrome
const q10 = [{
    input: ['Was it a cart or a cat I saw?'],
    output: false
},
{
    input: ['A man, a plan, a canal – Panama'],
    output: true
}];
// romanToInteger
const q11 = [{
    input: ["VI"],
    output: 6
},
{
    input: ["MCMXCIV"],
    output: 1994
}];

// isCrossing
const q12 = [{
    input: ["NESSESWN"],
    output: true
},
{
    input: ["NESENENESSSE"],
    output: false
}];

let result = [{
    functionName: 'howManyTeams',
    functionCode: howManyTeams,
    trials: [],
    cases: q1
},
{
    functionName: 'findDuplicates',
    functionCode: findDuplicates,
    trials: [],
    cases: q2
},
{
    functionName: 'kStepAway',
    functionCode: kStepAway,
    trials: [],
    cases: q3
},
{
    functionName: 'powerSet',
    functionCode: powerSet,
    trials: [],
    cases: q4
},
{
    functionName: 'productOfOthers',
    functionCode: productOfOthers,
    trials: [],
    cases: q5
},
{
    functionName: 'longestNested',
    functionCode: longestNested,
    trials: [],
    cases: q6
},
{
    functionName: '(Bonus) minPath',
    functionCode: minPath,
    trials: [],
    cases: q7
},
{
    functionName: 'sortColors',
    functionCode: sortColors,
    trials: [],
    cases: q8
},
{
    functionName: 'minMoves',
    functionCode: minMoves,
    trials: [],
    cases: q9
},
{
    functionName: 'isPalindrome',
    functionCode: isPalindrome,
    trials: [],
    cases: q10
},
{
    functionName: 'romanToInteger',
    functionCode: romanToInteger,
    trials: [],
    cases: q11
},
{
    functionName: 'isCrossing',
    functionCode: isCrossing,
    trials: [],
    cases: q12
}
];

function setsAreEqual(a1, a2) {
   if(!a2) {
       return false;
   } 
   if(a1.length !== a2.length) {
       return false;
   }
   for(let x of a1) {
       let xIsThere = false;
       if(x.length) {
           x.sort();
       }
       for(let y of a2) {
          if(y.length) {              
              y.sort();
          } 
          if(isEqual(x, y)) {
              xIsThere = true;
              break;
          }
       }
       if(!xIsThere) {
           return false;
       }
   }
   return true;
}

function isEqual(a1, a2, setEquality){
    if(setEquality) {
        return setsAreEqual(a1, a2);
    }
    const t = typeof(a1);
    if((t === 'boolean') || (t === 'number') || (t === 'string')){
        return a1 === a2;
    }
    
    if(!a1 || !a2 || a1.length !== a2.length) {
        return false;
    }
    for(let i = 0; i < a1.length; i++) {
        if(!isEqual(a1[i], a2[i])) {
            return false;
        }
    }
    return true;
}

for(let f of result){
    for(let x of f.cases){
        let trial = {status: 'failed',
         input: x.input + "",
        expected: x.output, 
        output: undefined};
        trial.output = f.functionCode(...x.input);
        
        if(isEqual(x.output, trial.output, x.setEquality)) {
            trial.status = 'success'
        }
        f.trials.push(trial);
    }
}



function showTestsResults() {
    for (x of result) {
        let newDiv = document.createElement("div");
        let functionName = document.createElement("div");
        let name = document.createTextNode(x.functionName + ":");
        functionName.appendChild(name);
        functionName.className = 'functionName';
        newDiv.className = 'functionDiv';
        newDiv.appendChild(functionName);
        let ol = document.createElement('ol');
        for(y of x.trials) {
            let li = document.createElement('li');
            let content = document.createTextNode(`${y.status}`);
            li.appendChild(content);
            let br1 = document.createElement('br');
            li.appendChild(br1);
            let input = document.createTextNode(`input: ${y.input}`);
            li.appendChild(input);
            let br2 = document.createElement('br');
            li.appendChild(br2);
            let output = document.createTextNode(`output: ${y.output}`);
            li.appendChild(output);
            let br3 = document.createElement('br');
            li.appendChild(br3);
            let expected = document.createTextNode(`expected: ${y.expected}`);
            li.appendChild(expected);
            if(y.status === 'failed') {
                li.className = 'failed';
            } else {
                li.className = 'success';
            }                                       
            ol.appendChild(li);
        }
        newDiv.appendChild(ol);
        document.body.appendChild(newDiv);
    }
}


