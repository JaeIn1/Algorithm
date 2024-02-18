let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for(let i = 0; i < input.length -1; i++){
  arr.push(input[i].split(" ").map(Number));
}
let visited = [];
let select = [];
let answer = "";
for(let i of arr){
  visited.push(i.map((e) => e === false))
}

function dfs(arr , depth , start , testcase){
  let result = [];
  if(depth === 6){
    for(let i of select) result.push(arr[testcase][i]);
    for(let j of result) answer += j + " ";
    answer += "\n";
    return;
  }
  for(let i = start; i < arr[testcase].length; i++){
    if(visited[testcase][start]) continue;
    visited[testcase][start] = true;
    select.push(i);
    dfs(arr , depth + 1, i + 1 , testcase);
    visited[testcase][start] = false;
    select.pop();
  }
}
for(let i = 0; i < arr.length; i++){
  answer = "";
  dfs(arr , 0 , 1 , i);
  console.log(answer);
}