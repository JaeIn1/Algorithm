let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [a,b] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let newArr = arr.sort((a,b) => b-a);
console.log(newArr[b-1]);