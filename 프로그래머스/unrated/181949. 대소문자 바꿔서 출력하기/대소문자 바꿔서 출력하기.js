let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
let str = input[0];
for(let i = 0; i<input[0].length; i++){
    if(str[i] === str[i].toUpperCase()) arr.push(str[i].toLowerCase());
    else arr.push(str[i].toUpperCase());
};

console.log(arr.join(""));