let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let count = 0;
let start = 0;

while (1) {
  if (n === count) {
    start--;
    break;
  }
  if(String(start).includes("666")) {
    count++;
  }
  start += 1;
}
console.log(start);