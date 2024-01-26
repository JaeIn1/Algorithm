let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);
let price = input[1].split(" ").map(Number);
let total = Number(input[2]);

let start = 1;
let end = price.reduce((a,b) => Math.max(a,b));

let res = 0;
while(start <= end){
  let mid = parseInt((start + end) / 2);
  let t = 0;
  for(let i of price){
    t += Math.min(mid , i);
  }
  if(t <= total){
    res = mid;
    start = mid + 1;
  }else{
    end = mid -1;
  }
}
console.log(res);