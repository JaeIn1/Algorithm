let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let max = 0;
for(let i =0; i<input.length; i++){
  if(max < Number(input[i].length)) max = Number(input[i].length);
}

let result = new Array(max).fill("");
for(let i =0; i<input.length; i++){
  let arr = input[i].split("");
  for(let j  = 0; j<arr.length; j++){
    result[j] = result[j] + arr[j];
  }
}
console.log(result.join(""));