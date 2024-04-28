let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
input.shift();

let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = input[i].split("");
}

let visited = [];
let cnt1 = 0;
for (let i = 0; i < n; i++) visited[i] = Array.from({ length: 5 }, () => false);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(n, n, i, j, arr[i][j])) cnt1++;
  }
}

let cnt2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited[i] = Array.from({ length: 5 }, () => false);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === "G") arr[i][j] = "R";
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(n, n, i, j, arr[i][j])) cnt2++;
  }
}

console.log(cnt1 , cnt2);

function dfs(x, y, i, j, c) {
  if (i < 0 || i >= x || j < 0 || j >= y) return false;

  if (!visited[i][j] && arr[i][j] === c) {
    visited[i][j] = true;
    dfs(x, y, i - 1, j, c);
    dfs(x, y, i + 1, j, c);
    dfs(x, y, i, j - 1, c);
    dfs(x, y, i, j + 1, c);
    return true;
  }
  return false;
}
