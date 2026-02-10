const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const forest = [];

for (let i = 1; i <= n; i++) {
  forest.push(input[i].split(" ").map(Number));
}

const dp = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y) {
  if (dp[x][y] != 0) {
    return dp[x][y];
  }

  dp[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (forest[x][y] < forest[nx][ny]) {
        dp[x][y] = Math.max(dp[x][y], dfs(nx, ny) + 1);
      }
    }
  }

  return dp[x][y];
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    answer = Math.max(answer, dfs(i, j));
  }
}

console.log(answer);