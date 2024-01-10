let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let m = Number(input[0]);

for (let n = 0; n < m; n++) {
  let sum = n;
  n_str = n.toString();
  let length = n_str.length;
  for (let i = 0; i < length; i++) {
    sum += parseInt(n_str[i]);
  }
  if (m === sum) {
    console.log(n);
    break;
  }
  if (n === m - 1) {
    console.log(0);
  }
}