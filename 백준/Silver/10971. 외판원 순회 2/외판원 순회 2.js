let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);
let arr = [];
for(let i = 1; i <= num; i++) arr.push(input[i].split(" ").map(Number));

let visited = new Array(num).fill(false);
let min= 1e9;

function dfs(depth , start , cost){
  if(depth === num-1 && arr[start][0] !== 0){
    min = Math.min(min , cost + arr[start][0]);
    return;
  }
  for(let i = 0; i < num; i++){
    if(!visited[i] && arr[start][i] !== 0){ 
      visited[i] = true;
      dfs(depth + 1 , i , cost + arr[start][i]);
      visited[i] = false;
    }
  }
}
visited[0] = true;
dfs(0 ,0 ,0);
console.log(min);