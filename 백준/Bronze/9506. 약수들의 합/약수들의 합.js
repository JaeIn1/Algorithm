let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
for(let i = 0; i<input.length-1; i++){
  console.log(solution(input[i]));
}

function solution(data){
  let arr = [];
  let sum = 0;
  for(let i = 1; i<data; i++){
    if(data % i === 0){
      sum += i;
      arr.push(i);
    } 
  }
  if(data === sum){
    return (`${data} = ${arr.join(" + ")}`);
  }else{
    return (`${data} is NOT perfect.`);
  }
}