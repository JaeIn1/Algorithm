let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input.map(Number)
let sortArr = input.map(Number).sort((a,b) => a - b);

let stack = [];
let result = [];

for(let i = 0; i< num; i++){
  while(arr[i] !== stack[stack.length -1] && sortArr.length > 0){
    stack.push(sortArr[0]);
    sortArr.shift();
    result.push("+");
  }
  let n = stack.pop();
  if(arr[i] !== n){
    return console.log("NO");
  }else{
    result.push("-"); 
  }
}

let answer = "";

for(let i of result)
  answer += i + "\n";
console.log(answer);