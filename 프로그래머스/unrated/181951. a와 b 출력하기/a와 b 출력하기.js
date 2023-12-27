let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(`a = ${input[0]}`);
console.log(`b = ${input[1]}`);