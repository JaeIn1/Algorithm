const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = 0;
let stack = [];
let arr = input[0].split("");

for(let i = 0; i< arr.length; i++){
  if(arr[i] === "(" && arr[i+1] === ")"){
    result += stack.length;
    i+=1;
  }
  else if(arr[i] === "("){
    stack.push(arr[i]);
  }
  else if(arr[i] === ")"){
    stack.pop();
    result += 1;
  }
}

console.log(result);