let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let str = input[0].trim().split(" ");
if(str == "") str = [];
console.log(str.length);