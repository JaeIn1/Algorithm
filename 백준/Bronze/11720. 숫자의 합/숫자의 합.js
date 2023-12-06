let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let n = Number(input[0]);
let str = input[1];

let sum = 0;
for(let i of str){
  sum += Number(i);
}
console.log(sum);