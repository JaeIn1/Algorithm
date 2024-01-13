let fs = require("fs");
let [num , ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = [];
for(let i = 0; i< num; i++){
  result.push(arr[i]);
}
let answer = result.sort((a,b) => a-b);
for(let i of answer)
  console.log(i);