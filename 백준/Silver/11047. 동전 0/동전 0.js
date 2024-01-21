const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = input.shift().split(" ").map(Number);
let arr = input.map(Number).reverse();

let sum = 0;
let result = num[1];
let count = 0;
let index = 0;
while (sum < result) {
  if (arr[index] > num[1]) {
    index++;
    continue;
  }
  let n = parseInt((num[1] / arr[index]));
  count += n;
  sum += n * arr[index];
  num[1] -= n * arr[index];
  index++;
}

console.log(count);