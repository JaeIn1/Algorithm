let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let answer = 0;
let visited = new Array(n + 1).fill(false);
let queue = [];
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function bfs(x) {
  queue.push(x);
  visited[x] = true;

  while(queue.length !== 0){
    let cur = queue.shift();
    for(let nxt of graph[cur]){
      if(!visited[nxt]){
        queue.push(nxt);
        visited[nxt] = true;
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    answer++;
    bfs(i);
  }
}
console.log(answer);
