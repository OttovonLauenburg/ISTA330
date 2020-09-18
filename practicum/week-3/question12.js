/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
  var x = 0;
  var y = 0;
  var location = ['00'];
  for (let direc in s){
        if (s[direc] === 'N'){
            y += 1;
        }
        if (s[direc] === 'S'){
            y -= 1;
        }
        if (s[direc] === 'E'){
            x += 1;
        }
        if (s[direc] === 'W'){
            x -= 1;
        }
        k = x+""+y+"";
        if (location.indexOf(k) !== -1){
            return true;
        }else {
            location.push(k);
        }
  }
  return false;
};

