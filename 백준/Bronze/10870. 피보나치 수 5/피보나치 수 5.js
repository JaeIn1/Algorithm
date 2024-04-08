let fs= require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let answer = 0;

function Fibo(num){
  if(num === 0) return 0;
  if(num === 1) return 1;
  return Fibo(num - 1) + Fibo(num - 2);
}
function solution(data){
  return Fibo(data);
}

answer = solution(n);
console.log(answer);