let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let answer = 0;

while(n >= 5){
  answer += parseInt(n/5);
  n = n / 5;
}
console.log(answer);














