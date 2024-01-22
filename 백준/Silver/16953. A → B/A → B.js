const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [start , end] = input[0].split(" ").map(Number);

let cnt = 1;
let flag = false;
while(start <= end){
  if(start === end){
    flag = true;
    break;
  }
  if(end % 2 === 0) end = parseInt(end / 2);
  else if(end % 10 === 1) end=  parseInt(end / 10);
  else break;
  cnt++;
}

if(flag) console.log(cnt);
else console.log(-1);