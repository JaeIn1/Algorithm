let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let visited = new Array(n + 1).fill(false);
let finish = new Array(n + 1).fill(false);
let graph = [];
let result = [];

for (let i = 1; i <= n; i++) graph[i] = Number(input[i]);
for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i, graph, visited, finish, result);
}

function dfs(x, graph, visited, finish, result) {
  visited[x] = true;
  let y = graph[x];

  if (!visited[y]) dfs(y, graph, visited, finish, result);
  else if (!finish[y]) {
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finish[x] = true;
}
console.log(result.length);
result.sort((a , b) => a - b);
for(let x of result) console.log(x);
