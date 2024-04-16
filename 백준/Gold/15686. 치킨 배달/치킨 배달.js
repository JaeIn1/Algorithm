let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let h = [];
let ch = [];

for(let i = 0; i < n; i++){
  let arr = input[i + 1].split(" ").map(Number);
  arr.forEach((e , j) => {
    if(e === 1) h.push([i , j]);
    if(e === 2) ch.push([i , j]);
  })
}

let visited = new Array(ch.length).fill(false);
let select = [];
let answer = 1e9;

function dfs(start , depth){
  let result = [];
  let sum = 0;
  if(depth === m){
    for(let s of select) result.push(ch[s]);
    for(let [kx , ky] of h){
      let temp = 1e9;
      for(let [cx , cy] of result){
        temp = Math.min(temp , Math.abs(kx - cx) + Math.abs(ky - cy));
      }
      sum += temp;
    }
    answer = Math.min(answer , sum);
    return;
  }

  for(let i = start; i < ch.length; i++){
    if(visited[i]) continue;
    select.push(i);
    visited[i] = true;
    dfs(i + 1 , depth + 1);
    select.pop();
    visited[i] = false;
  }
  
}
dfs(0, 0); //시작 start , depth
console.log(answer);
