let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let str = input[0];
let num = Number(input[1]);
console.log(str.repeat(num));