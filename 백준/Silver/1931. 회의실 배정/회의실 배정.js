const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let arr = [];
for (let i = 1; i <= num; i++) {
  let a = input[i].split(" ").map(Number);
  arr.push(a);
}
arr.sort(function(a ,b) {
  if(a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1;
let cur = 0;
for(let i = 1; i< num; i++){
  if(arr[cur][1] <= arr[i][0]){
    cur = i;
    cnt++;
  }
}
console.log(cnt);