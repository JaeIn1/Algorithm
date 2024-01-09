let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);
let a ,b, c, d;
for(let i = 0; i< num; i++){
  a = parseInt(Number(input[i+1]) / 25);
  b = parseInt(Number(input[i+1] - a * 25) / 10); 
  c = parseInt(Number(input[i+1] - a * 25 - b * 10) / 5);
  d = parseInt(Number(input[i+1] - a * 25 - b * 10 - c * 5) / 1);
  console.log(a,b,c,d);
}