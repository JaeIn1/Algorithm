let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map((x)=>Number(x));
let max = input.reduce((a,b) => {
  return Math.max(a,b);
},0);
let index = input.indexOf(max);
console.log(max);
console.log(index+1);