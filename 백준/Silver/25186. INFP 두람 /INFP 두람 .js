let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a , b) => b - a);
let p = arr.reduce((a , b) => a + b);

let num = parseInt(p / 2);
let flag = false;

for(let i = 0; i < arr.length; i++){
  if(arr[i] === 1) break;
  if(arr[i] > num) flag = true;
}

if(flag) console.log("Unhappy");
else console.log("Happy");













