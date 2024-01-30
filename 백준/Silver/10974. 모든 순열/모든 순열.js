let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let arr = []; // 순열을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); //방문했는지 체크
let select = [];

let answer = "";
function dfs(arr , depth){
  if(depth === n){
    let result = [];
    for(let i of select) result.push(arr[i]);
    for(let j of result) answer += j + " ";
    answer += "\n";
    return;
  }
  for(let i = 0; i< n; i++){
    if(visited[i]) continue;
    select.push(i);
    visited[i] = true;
    dfs(arr , depth + 1);
    select.pop();
    visited[i] = false;
  }
}
dfs(arr , 0);
console.log(answer);