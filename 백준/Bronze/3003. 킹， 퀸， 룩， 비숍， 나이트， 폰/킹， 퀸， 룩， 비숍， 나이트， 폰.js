let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map((x)=>Number(x));

let answer = [1,1,2,2,2,8];
let result = [];
for(let i = 0; i< input.length; i++){
  if(input[i] == answer[i]) result[i] = 0;
  else result[i] = answer[i] - input[i];
}
console.log(result.join(" "));