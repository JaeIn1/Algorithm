let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

let sum = 0;
let index = 1;

while (1) {
  sum += index;

  if (sum > num) {
    index -= 1;
    break;
  }

  index += 1;
}

console.log(index);
