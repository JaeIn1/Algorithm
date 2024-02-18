let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);
let queen = [];
let answer = 0;

function possible(x , y){
  for(let [a , b] of queen){
    if(a === x || b === y) return false;
    if(Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}
function dfs(row){
  if(row === num) answer++;
  for(let i = 0; i < num; i++){
    if(!possible(row , i)) continue;
    queen.push([row , i]);
    dfs(row + 1);
    queen.pop();
  }
}
dfs(0);
console.log(answer);