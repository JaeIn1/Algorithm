const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input[0].split(" ").map(Number).sort((a,b) =>  a- b);


let result = 0;
let sum = 0;

for(let i = 0; i< arr.length; i++){
  sum += arr[i];
  result += sum;
}

console.log(result);