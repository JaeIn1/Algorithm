const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input.shift());
let arr = input.map(Number);

function Fibo(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  
  let fiboArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
  }

  return fiboArray[n];
}

let answer = "";
for(let i = 0; i<num; i++){
  let result = [];
  let n = arr[i];
  let index = 0;
  
  while(n > 0){
    if(n === 0) break;
    if(Fibo(index) > n){
      result.push(Fibo(index-1));
      n -= Fibo(index -1);
      index = 0;
    }else index++;
  }
  answer += result.reverse().join(" ") + "\n";
}

console.log(answer);