let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let str = input[0];

let result = "";
for (let i = 97; i <= 122; i++) {
  result += str.indexOf(String.fromCharCode(i)) + " ";
}
console.log(result.trim());