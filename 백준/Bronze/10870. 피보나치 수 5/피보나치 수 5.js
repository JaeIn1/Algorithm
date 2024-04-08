let fs= require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let answer = 0;

function Fibo(num){
  if(num < 2) return num;
  let dp = [0 , 1];
  for(let i = 2; i <= num; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[num];
}
function solution(data){
  return Fibo(data);
}

answer = solution(n);
console.log(answer);