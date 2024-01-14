let fs = require("fs");
let [num , ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = [];
for(let i = 0; i< num; i++){
  result.push(arr[i]);
}
let newArr = result.sort((a,b) => a-b);
let answer = "";
for(let i of newArr)
  answer += i + "\n";
console.log(answer);