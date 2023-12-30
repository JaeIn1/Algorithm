let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((x)=>Number(x));

if(input % 2 === 0) console.log(`${input} is even`);
else console.log(`${input} is odd`);