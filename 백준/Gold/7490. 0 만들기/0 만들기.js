let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let k = 0;
let arr = [];

function dfs(result, depth){
  if(depth === k-1){
    let str = "";
    for(let i = 0; i < k -1; i++) str += arr[i] + result[i];
    str += arr[k-1];
    let cur = eval(str.split(" ").join(""));
    if(cur === 0) console.log(str);
    return;
  }
  for(let i of [" " , "+" , "-"]){
    result.push(i);
    dfs(result , depth + 1);
    result.pop();
  }
}

for(let i = 1; i<= n; i++){
  k = Number(input[i]);
  arr = [];
  for(let i = 1; i <=k; i++) arr.push(i);
  dfs([], 0);
  console.log();
} 