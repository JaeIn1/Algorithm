let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n , m] = input[0].split(" ").map(Number);
let graph = [];
let visited = new Array(n).fill(false);
let flag = 0;

for(let i = 0; i < n; i++) graph[i] = [];
for(let i = 1; i <= m; i++){
  let [a , b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
function dfs(start , depth){
  if(depth === 5){
    flag = 1;
    return;
  }
  for(let x of graph[start]){
    if(visited[x]) continue;
    visited[x] = true;
    dfs(x , depth + 1);
    if(flag === 1) break;
    visited[x] = false;
  }
}

for(let i = 0; i < n; i++){
  visited[i] = true;
  dfs(i , 1);
  if(flag === 1) break;
  visited[i] = false;
}
if(flag === 1) console.log(1);
else console.log(0);

