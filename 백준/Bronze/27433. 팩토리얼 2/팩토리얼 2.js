let fs= require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let answer = 0;

function factorial(num){
  if(num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
function solution(data){
  return factorial(data);
}

answer = solution(n);
console.log(answer);