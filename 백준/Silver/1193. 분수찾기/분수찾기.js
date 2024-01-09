let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("/");
let num = Number(input[0]);

let groupCnt = 0;
let a = [];
let b = [];

while(num > 0){
  groupCnt++;
  num -= groupCnt;
}

for(let i = 0; i< groupCnt; i++){
  a.push(i+1);
  b.push(groupCnt -i);
}

if(groupCnt % 2 === 0){
  console.log(`${a[groupCnt + num -1]}/${b[groupCnt + num -1]}`);
}else{
  console.log(`${b[groupCnt + num -1]}/${a[groupCnt + num -1]}`);
}