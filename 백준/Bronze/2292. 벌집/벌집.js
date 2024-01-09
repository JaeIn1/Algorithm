let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let result = 1;
let block = 1;
while(block < input){
  block += 6 * result;
  result++;
}
console.log(result);