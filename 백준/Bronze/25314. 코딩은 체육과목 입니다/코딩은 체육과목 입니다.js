let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0]);

let text = "";

for(let i=0; i<parseInt(num/4); i++){
  text += "long ";
}

text += "int";
console.log(text);