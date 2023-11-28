let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// ["1", "2"]

let line = input[0].split(' '); 
let a = parseInt(line[0]); // 1
let b = parseInt(line[1]);
console.log(a + b);