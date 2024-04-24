let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let line = 0;
let testcase = 1;

function dfs(graph, x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (dfs(graph, y, x)) return true;
    } 
    else if (y !== prev) {
      return true;
    }
  }
  return false;
}
while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if (n === 0 && m === 0) break;
  let graph = [];
  visited = new Array(n + 1).fill(false);
  let cnt = 0;
  
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [m, k] = input[i + line].split(" ").map(Number);
    graph[m].push(k);
    graph[k].push(m);
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!dfs(graph, i, 0)) cnt++;
    }
  }
  if (cnt === 0) console.log(`Case ${testcase}: No trees.`);
  else if (cnt === 1) console.log(`Case ${testcase}: There is one tree.`);
  else console.log(`Case ${testcase}: A forest of ${cnt} trees.`);
  line += m + 1;
  testcase++;
}
