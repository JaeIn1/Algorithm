let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input[0].split("");
arr.sort();
let stack = [arr[0]];
let answer1 = [];
let answer2 = [];

for(let i = 1; i < arr.length; i++){
  if(arr[i] === stack[stack.length -1]){
    stack.pop();
    answer1.push(arr[i]);
    answer2.unshift(arr[i]);
    if(i === arr.length -1) break;
    else{
      stack.push(arr[i + 1]);
      i++;
    }
  }
  else{
    stack.push(arr[i]);
  }
}
if(stack.length >= 2){
  answer = "I'm Sorry Hansoo";
}
else{
  answer = answer1.join("") + stack.join("") + answer2.join("");
}
console.log(answer);