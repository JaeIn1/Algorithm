let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input;

let result = [];

for (let i = 0; i < num; i++) {
  let cases = arr[i];
  let stack = [];
  let temp = "YES";
  
  for (let s of cases) {
    if (s === "("){
      stack.push("(");
    } 
    else {
      if(stack.length === 0){
        temp = "NO";
        break;
      }else stack.pop();
    }
  }
  if (stack.length !== 0) temp = "NO";
  result.push(temp);
}

let answer = "";
for(let i of result)
  answer += i += "\n";
console.log(answer);