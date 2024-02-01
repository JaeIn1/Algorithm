let fs = require("fs");
let [n, m] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let answer = "";
let selected = [];

function dfs(arr, depth) {
  let result = [];
  
  if (depth === m) {
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
}
dfs(arr, 0);
console.log(answer);