let fs = require("fs");
let [a,b,c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(Math.ceil((c-b) / (a - b)));