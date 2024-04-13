let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n , m] = input[0].split(" ").map(Number);

let graph = [];
let visited = new Array(n + 1).fill(false);
let distanse = new Array(n + 1).fill(0);

for(let i = 1; i <= n; i++) graph[i] = [];
for(let i = 1; i < n; i++){
  let [a , b , cost] = input[i].split(" ").map(Number);
  graph[a].push([b , cost]);
  graph[b].push([a , cost]);
}

function dfs(node , dist){
  if(visited[node]) return;
  visited[node] = true;
  distanse[node] += dist;
  for(let [y,  cost] of graph[node])dfs(y , dist + cost);
  
}

for(let i = n; i < n + m; i++){
  let [start , end] = input[i].split(" ").map(Number);
  dfs(start , 0);
  console.log(distanse[end]);
  visited = new Array(n + 1).fill(false);
  distanse = new Array(n + 1).fill(0);
}