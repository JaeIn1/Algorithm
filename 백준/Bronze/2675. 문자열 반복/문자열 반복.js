let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let n = input[0];

let result = "";
for(let i= 1; i<=n; i++){
  let [a,b] = input[i].split(" ");
  for(let j = 0; j<b.length; j++){
    result += b.charAt(j).repeat(Number(a));
  }
  result += "\n"
}
console.log(result);