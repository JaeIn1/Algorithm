let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let arr = [];

for(let i = 1; i<=input[0]; i++){
  if(input[0] % i === 0) arr.push(i);
}
if(arr.length < input[1]){
  console.log(0);
}else console.log(arr[input[1] -1]);