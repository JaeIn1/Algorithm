let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let testcase = Number(input[0]);
let line = 1;

while (testcase--) {
  let [n, m] = input[line].split(" ").map(Number);
  let visited = new Array(n + 1).fill(-1);
  let queue = [];
  let graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i] === -1) bfs(i, graph, visited , queue);
  }
  
  if (isBipartite(graph , visited)) console.log("YES");
  else console.log("NO");
  line += m + 1;
}

function bfs(x, graph, visited , queue) {
  queue.push(x);
  visited[x] = 0;

  while (queue.length !== 0) {
    let cur = queue.shift();
    for (let nxt of graph[cur]) {
      if (visited[nxt] === -1) {
        queue.push(nxt);
        visited[nxt] = (visited[cur] + 1) % 2;
      }
    }
  }
  return true;
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}
