const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let testCase = Number(input[0]);
let line = 1;

for(let i = 0; i< testCase; i++){
  let n = Number(input[line]);
  let arr = [];
  for(let i = line + 1;  i<= line + n; i++){
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((a,b) => a[0] - b[0]);
  let cnt = 0;
  let min = 100001;
  for(let [a,b] of arr){
    if(b < min){
      min = b;
      cnt++;
    }
  }
  console.log(cnt);
  line += n +1;
}