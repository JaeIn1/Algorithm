let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n =Number(input[0]);

let arr = [0];
for(let i = 1; i <= n; i++) arr.push(Number(input[i]));

let dp = new Array(n  + 1).fill([]);
dp[0] = 0;
dp[1] = arr[1];
dp[2] = arr[2] + arr[1];

for(let i = 3; i <= n; i++){
  let max = Math.max(dp[i - 2] + arr[i] , dp[i - 3] + arr[i - 1] + arr[i]);
  dp[i] = max;
}
console.log(dp[n]);