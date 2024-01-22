const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input[0].split("-");
let answer = 0;
for (let i = 0; i < str.length; i++) {
  let cur = str[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) answer += cur;
  else answer -= cur;
}
console.log(answer);