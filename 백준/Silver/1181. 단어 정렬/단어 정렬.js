let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = [...new Set(input)];
arr.sort();
arr.sort((a,b) =>{
  if(a.length !== b.length){
    return a.length - b.length;
  }
})

let answer = "";
for(let i of arr)
  answer += i + "\n";
console.log(answer);