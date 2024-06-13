let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let cnt = 0;

let stack = Array.from({ length: 4 }, () => []);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 4; j++) {
    if (stack[j].length === 0) {
      stack[j].push(arr[i]);
      cnt++;
      break;
    } else if (stack[j][stack[j].length - 1] <= arr[i]) {
      stack[j].push(arr[i]);
      cnt++;
      break;
    }
  }
}

if (cnt < arr.length) {
  console.log("NO");
} else console.log("YES");
