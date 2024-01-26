let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [tc , th] = input[0].split(" ").map(Number);
let h = input[1].split(" ").map(Number);

let start = 1;
let end = h.reduce((a,b) => Math.max(a,b));
let result = 0;

while(start <= end){
  let sum = 0;
  let mid = parseInt((start + end) / 2);
  for(let i = 0; i<h.length; i++){
    let m = h[i] - mid;
    if(m > 0) sum += m;
    else continue;
  }
  if(sum >= th){
    result = mid;
    start = mid + 1;
  }else{
    end = mid -1;
  }
}
console.log(result);