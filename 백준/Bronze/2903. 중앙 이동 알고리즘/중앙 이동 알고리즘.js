let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let num = Number(input[0]);

let result = 0;
let dot = 2;
for(let i = 1; i<= num; i++){
  dot = dot * 2 - 1;
  result = dot * dot;
}
console.log(result);