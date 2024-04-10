let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function reculsive(str) {
  if(str.includes("---")){
    let len = str.length / 3;
    let arr = [];
    for(let i = 0; i <= str.length - len; i+= len){
      arr.push(str.slice(i , i + len));
    }
    arr[0] = reculsive(arr[0]);
    arr[1] = arr[1].replaceAll("-" , " ");
    arr[2] = reculsive(arr[2]);
    return arr.join("");
  }
  return str;
}

function solution(n) {
  let l = Math.pow(3, n);
  return reculsive("-".repeat(l));
}
for (let i = 0; i < input.length; i++) {
  let answer = solution(input[i]);
  console.log(answer);
}