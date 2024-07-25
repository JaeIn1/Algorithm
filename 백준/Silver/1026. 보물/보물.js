let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);

let newB = B.map((e , i) => [e, i]);
newB.sort((a , b) => b[0] - a[0]);
A.sort((a , b) => a - b);

for(let i = 0 ; i < n; i++){
  A[i] = [A[i] , newB[i][1]];
}

let sum = 0;
for(let i = 0; i < n; i++){
  sum += A[i][0] * newB[i][0];
}

console.log(sum);


