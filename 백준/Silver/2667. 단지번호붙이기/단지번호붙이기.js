let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n =Number(input[0]);
let visited = Array.from({length : n}, ()=> new Array(n).fill(0));
let rank = [];
let cnt = 0;

for(let i = 0; i < n; i++){
  let x = input[i + 1].split("").map(Number);
  x.forEach((e , j) => {
    if(e === 1) visited[i][j] = 1;
  })
}

function dfs(n,  i , j){
  if(i < 0 || i >= n || j  < 0 || j >= n) return false;
  if(visited[i][j] === 1){
    visited[i][j] = -1;
    cnt++;
    dfs(n , i - 1 , j);
    dfs(n , i + 1 , j);
    dfs(n , i, j + 1);
    dfs(n , i, j - 1);
    return true;
  }
  return false;
}

let answer = 0;

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(dfs(n , i, j)){
      answer++;
      rank.push(cnt);
      cnt = 0;
    }
  }
}
console.log(answer + "\n" + rank.sort((a , b) => a - b).join("\n"));