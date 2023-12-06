let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let n = Number(input[0]);

let result = ""
for(let i = 0; i<n; i++){
  let str = input[i+1].charAt(0) + input[i+1].charAt(input[i+1].length-1) + "\n";
  result += str;
}
console.log(result);