let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n , m , k] = input[0].split(" ").map(Number);
let visited = new Array(n + 1).fill(false);
let dfsSelect = [];
let bfsSelect = [];

let graph = [];
let queue = [];
for(let i = 1; i <= n; i++) graph[i] = [];

for(let i = 1; i <= m; i++){
  let [a , b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(x){
  visited[x] = true;
  dfsSelect.push(x);
  for(let i of graph[x].sort((a , b)=> a - b)){
    if(!visited[i]) dfs(i);
  }
}


function bfs(x){
  queue.push(x);
  visited[x] = true;
  while(queue.length !== 0){
    let cur = queue.shift();
    bfsSelect.push(cur);
    visited[cur] = true;
    for(let nxt of graph[cur]){
      if(!visited[nxt]){
        queue.push(nxt);
        visited[nxt] = true;
      }
    }
  }
}

dfs(k);
visited = new Array(n + 1).fill(false);
bfs(k);
console.log(dfsSelect.join(" "));
console.log(bfsSelect.join(" "));
