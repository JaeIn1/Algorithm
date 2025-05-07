let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let ingre = [];
for (let i = 1; i <= n; i++) {
  ingre.push(input[i].split(" ").map(Number));
}

let answer = 1e9;

function dfs(idx, sin, jan, use) {
  if (idx == n) {
    if (use == 0) return;

    let diff = Math.abs(sin - jan);
    answer = Math.min(answer, diff);
    return;
  }

  dfs(idx + 1, sin * ingre[idx][0], jan + ingre[idx][1], use + 1);
  dfs(idx + 1, sin, jan, use);
}

dfs(0, 1, 0, 0);

console.log(answer);
