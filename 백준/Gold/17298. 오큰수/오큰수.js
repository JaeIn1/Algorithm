const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input[0].split(" ").map(Number);

let result = new Array(num).fill(-1);
let stack = [];

for(let i = 0; i < num; i++){
  while(stack.length && arr[stack[stack.length -1]] < arr[i])
    result[stack.pop()] = arr[i];
  stack.push(i);
}
console.log(result.join(" "));