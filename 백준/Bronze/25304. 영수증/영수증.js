let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let price = Number(input[0]);
let count = Number(input[1]);

let sum = 0;
for (let i = 0; i < count; i++) {
  let [a,b] = input[2+i].split(" ").map(Number);
  sum += (a * b);
}

if (price === sum) console.log("Yes");
else console.log("No");