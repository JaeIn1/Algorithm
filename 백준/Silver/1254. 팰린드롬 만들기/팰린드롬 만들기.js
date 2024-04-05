let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input[0].split("").join("");
let reverse = arr.split("").reverse().join("");
let cnt = 1;

function solution() {
  if (reverse === arr) {
    return arr.length;
  }
  
  for (let i = 1; i < arr.length; i++) {
    let str = arr.split("").slice(i).join("");
    let reverse = str.split("").reverse().join("");
    if (str === reverse) {
      return arr.length + cnt;
    }
    else {
      cnt++;
    }
  }
}

let answer = solution();
console.log(answer);