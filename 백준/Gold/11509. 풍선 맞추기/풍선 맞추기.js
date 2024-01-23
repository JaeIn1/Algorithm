const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let arrow = new Array(100001).fill(0);
let result = 0;

for(let x of arr){
  // 해당 위치에 화살이 있다면?
  if(arrow[x] > 0){
    arrow[x] -= 1;
    arrow[x-1] += 1;
  }else{
    arrow[x-1] += 1;
    result++;
  }
}
console.log(result);