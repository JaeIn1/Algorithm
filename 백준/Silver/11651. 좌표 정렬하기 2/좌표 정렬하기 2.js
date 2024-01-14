let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input.filter((e, i) => i >= 0).map((e) => e.split(" "));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});
let answer = ""
for (let i of arr) answer += `${i[0]} ${i[1]}\n`;
console.log(answer);