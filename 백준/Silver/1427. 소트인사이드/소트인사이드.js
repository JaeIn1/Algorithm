let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input[0].split("").sort((a,b) => b-a);
console.log(Number(arr.join("")));