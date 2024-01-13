let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let sum = 0;
let avg = 0;

for(let i of input)
  sum += i;
avg = sum / input.length;

let middle = input.sort((a,b) => a-b);
console.log(avg);
console.log(middle[2]);