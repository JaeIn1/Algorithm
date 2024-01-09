let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((e)=>e.split(" ").map(Number));
for(let i = 0; i < input.length-1; i++){
  let [a,b] = input[i];
  if(a < b){
    if(b % a === 0) console.log("factor");
    else console.log("neither")
  }else{
    if(a % b === 0) console.log("multiple");
    else console.log("neither")
  }
}