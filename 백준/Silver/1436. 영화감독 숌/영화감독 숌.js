let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let count = 1;
let start = 666;

while (n !== count) {
  start++;
  if(String(start).includes("666")) {
    count++;
  }
}
console.log(start);