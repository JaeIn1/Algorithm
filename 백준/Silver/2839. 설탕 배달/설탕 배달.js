const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);

let cnt = 0;
let flag = false;

while(num >= 0){
  if(num % 5 === 0 || num === 0){
    cnt += parseInt(num / 5);
    console.log(cnt);
    flag = true;
    break;
  }else{
    num -= 3;
    cnt++;
  }
}
if(!flag) console.log(-1);