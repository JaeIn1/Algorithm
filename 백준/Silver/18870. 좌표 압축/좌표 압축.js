let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input[0].split(" ").map(Number);

let newArr = [...new Set(arr)];
newArr.sort((a,b) => a -b);

let map = new Map();
for(let i= 0; i<newArr.length; i++){
  map.set(newArr[i] , i);
}
let answer = "";

for(let i of arr) answer += map.get(i) + " ";
console.log(answer);