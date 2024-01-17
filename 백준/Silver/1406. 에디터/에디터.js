const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let str = input.shift();
let num = Number(input.shift());
let arr = input.map((e) => e.split(" "));

let leftStack = str.split("");
let rightStack = [];
let idx = str.length;

for(let i = 0; i<arr.length; i++){
  let [cmd, value] = arr[i];
  
  if(cmd === "P") leftStack.push(value);
  
  if(cmd === "L"){
    if(leftStack.length !== 0) rightStack.push(leftStack.pop());
  }
  
  if(cmd === "B"){
    if(leftStack.length !== 0) leftStack.pop();
  }
  
  if(cmd === "D"){
    if(rightStack.length !== 0) leftStack.push(rightStack.pop());
  }
}
let result = leftStack.concat(rightStack.reverse()).join("");
console.log(result);