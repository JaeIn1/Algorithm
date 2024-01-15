let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input.map((e) => e.split(" "));

let result = [];
let answer = [];
for (let i = 0; i < arr.length; i++) {
  let a = arr[i];
  if (a[0] === "push") {
    result.push(a[1]);
  }
  if (a[0] === "pop") {
    if (result.length === 0) {
      answer.push(-1);
    } else {
      answer.push(result[result.length - 1]);
      result.pop();
    }
  }
  if (a[0] === "size") {
    answer.push(result.length);
  }
  if (a[0] === "empty") {
    if (result.length === 0) answer.push(1);
    else answer.push(0);
  }
  if (a[0] === "top") {
    if (result.length === 0) {
      answer.push(-1);
    }else{
      answer.push(result[result.length - 1]);
    }
    
  }
}
let answerStr = "";
for(let i of answer)
  answerStr += i + "\n";
console.log(answerStr);