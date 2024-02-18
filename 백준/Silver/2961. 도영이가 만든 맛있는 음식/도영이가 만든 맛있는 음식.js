let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));
let visited = new Array(n).fill(false);
let result = [];
let min = 1e9;

function dfs(depth , start){
  if(depth >= 1){
    let totalX = 1;
    let totalY = 0;
    for(let i of result){
      let [a,b] = arr[i];
      totalX *= a;
      totalY += b;
    }
    min = Math.min(min , Math.abs(totalX - totalY));
  }
  for(let i = start; i < n; i++){
    if(visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1 , i + 1);
    visited[i] = false;
    result.pop();
  }
}
dfs(0 , 0);
console.log(min);