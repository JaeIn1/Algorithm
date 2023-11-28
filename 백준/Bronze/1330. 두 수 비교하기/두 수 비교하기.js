let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (a > b) console.log(">");
else if(a < b) console.log("<");
else console.log("==");