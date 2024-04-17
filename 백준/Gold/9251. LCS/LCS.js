let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let s1 = input[0].split("");
let s2 = input[1].split("");

let dp = Array.from({length: s1.length + 1} , () => new Array(s2.length + 1).fill(0));

for(let i = 0; i < s1.length; i++){
  for(let j=  0; j < s2.length; j++){
    if(s1[i] === s2[j]){
      dp[i + 1][j + 1] = dp[i][j] + 1;
    }
    else{
      let max=  Math.max(dp[i + 1][j] , dp[i][j + 1]);
      dp[i + 1][j + 1] = max;
    }
  }
}
console.log(dp[s1.length][s2.length]);