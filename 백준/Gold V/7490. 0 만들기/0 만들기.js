let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let testCase = Number(input[0]);

let selected = [];
let answer = "";

function dfs(arr , depth){
  let result = "";
  if(arr.length -1 === depth){
    selected.forEach((e , i) =>{
      result += arr[i] + e;
    })
    result += arr[arr.length -1];
    if(eval(result.split(" ").join("")) === 0) answer += result + "\n";
    return;
  }
  for(let i of [" " , "+" , "-"]){
    selected.push(i);
    dfs(arr , depth + 1);
    selected.pop();
  }
}

for(let i = 1; i <= testCase; i++){
  answer = "";
  let n = input[i];
  let arr = [];
  for(let i = 1; i <= n; i++) arr.push(i);
  dfs(arr,  0);
  console.log(answer);
}