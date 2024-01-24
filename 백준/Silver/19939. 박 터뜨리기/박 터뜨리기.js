const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n , b] = input[0].split(" ").map(Number);

let sum = 0;

for(let i = 1; i< b+1; i++){
  sum += i;
}
if(sum > n) console.log(-1);
else{
  n -= sum;
  if(n % b === 0) console.log(b-1);
  else console.log(b);
}