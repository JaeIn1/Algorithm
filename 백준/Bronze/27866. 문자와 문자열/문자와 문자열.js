let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let str = input[0];
let n = Number(input[1]);

console.log(str.charAt(n-1));