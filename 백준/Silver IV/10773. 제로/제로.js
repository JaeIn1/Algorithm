const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let arr = [];
for(let i = 1; i <= num; i++){
  if(Number(input[i]) === 0) arr.pop();
  else arr.push(Number(input[i]));
}
console.log(arr.reduce((a , b) => a + b , 0))