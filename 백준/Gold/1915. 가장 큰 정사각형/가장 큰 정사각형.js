const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let grid = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
let arr = input.slice(1).map((e) => e.split("").map(Number));
for(let i = 1; i <= n; i++){
  for(let j = 1; j <= m; j++){
    grid[i][j] = arr[i - 1][j - 1];
  }
}

let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
let answer = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if(grid[i][j] === 1){
      if(answer == 0) answer = 1;
      if(grid[i - 1][j] === 1 && grid[i][j - 1] === 1 && grid[i - 1][j - 1] === 1){
        dp[i][j] = Math.min(dp[i - 1][j] , dp[i][j - 1] , dp[i - 1][j - 1]) + 1;
      }
      else{
        dp[i][j] = 1;
      }
    }
  }
}



for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    answer = Math.max(answer, dp[i][j]);
  }
}

console.log(answer * answer);


