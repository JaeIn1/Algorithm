let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [lc, lh] = input[0].split(" ").map(Number);
let h = [];
for (let i = 1; i <= lc; i++) {
  h.push(Number(input[i]));
}

let start = 0;
let end = h.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i of h) {
    total += parseInt(i / mid);
  }
  if (total < lh) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);