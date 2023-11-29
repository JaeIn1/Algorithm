let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);
let arr = input[1].split(" ");
let cnt=  arr.filter((el)=>el === input[2]).length;
console.log(cnt);