let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number); // 노드의 개수(N), 쿼리의 개수(M)
let graph = []; // 트리 정보 입력받기
let visited = new Array(n + 1).fill(false);
let distance = new Array(n + 1).fill(-1);

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  // 노드 X와 노드 Y는 서로 연결
  let [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}
function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[i + n].split(" ").map(Number);
  dfs(x, 0);
  console.log(distance[y]);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
}