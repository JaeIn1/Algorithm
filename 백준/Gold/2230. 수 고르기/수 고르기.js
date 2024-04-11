let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n , m] = input[0].split(" ").map(Number);
let arr = [];
for(let i = 1; i <= n; i++) arr.push(Number(input[i]));
arr.sort((a , b) => a - b);
let min = 2000000001;

let start = 0;
let end = 1;

while(start <= end){
  if(end === arr.length) break;
  if(arr[end] - arr[start] >= m){
    min = Math.min(min , arr[end] - arr[start]);
    start++;
  }
  else{
    end++;
  }
}
console.log(min);