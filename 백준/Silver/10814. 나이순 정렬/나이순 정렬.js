let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input.map((e) => e.split(" "));

arr.sort((a,b) =>{
  if(Number(a[0]) !== Number(b[0])){
    return Number(a[0]) - Number(b[0]);
  }
})

let answer = "";
for(let i of arr)
  answer += i[0] + " " + i[1] +"\n";
console.log(answer);