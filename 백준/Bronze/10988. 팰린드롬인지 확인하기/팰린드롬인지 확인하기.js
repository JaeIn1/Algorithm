let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let str = input[0].split("");
let rStr = str.reverse().join("");

console.log(input[0] === rStr ? 1 : 0); 