let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input;

let result = "";
for(let i = 0; i<num; i++){
  let a = arr[i].split(" ");
  for(let str of a)
    result += str.split("").reverse().join("") + " ";
  result += "\n";
}

console.log(result);