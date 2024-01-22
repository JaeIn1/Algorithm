const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);

let sum = 0;
let cnt = 1;
while (sum <= num) {
  sum += cnt;
  if(sum > num) break;
  cnt++;
}
console.log(cnt-1);