let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);

for(let i = 2; i <= num; i++){
  while(num % i === 0){
    console.log(i);
    num /= i;
  }
  if(num === 1) break;
}