let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n , k] = input[0].split(" ").map(Number);
let arr = [];
for(let i = 1; i <= n; i++) arr.push(Number(input[i]));
arr.reverse();
let result = 0;
let index = 0;

while(k > 0){
  result += parseInt(k / arr[index]);
  k %= arr[index];
  index++;
}
console.log(result);