const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = input.shift().split(" ").map(Number);
let arr = input.map(Number).reverse();

let result = 0;
for(let i = 0; i< num[0]; i++){
  result += parseInt(num[1] / arr[i]);
  num[1] %= arr[i];
}
console.log(result);