let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let start = Number(input[0]);
let end = Number(input[1]);

let result = [];
for (let i = start; i <= end; i++) {
  let check = 0;
  if (i === 1) continue;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) check++;
  }
  if (check === 0) result.push(i);
}
if (result.length < 1) console.log(-1);
else {
  console.log(result.reduce((a, b) => a + b));
  console.log(Math.min(...result));
}