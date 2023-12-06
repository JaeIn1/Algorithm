let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let str = input[0];
console.log(str.charCodeAt());