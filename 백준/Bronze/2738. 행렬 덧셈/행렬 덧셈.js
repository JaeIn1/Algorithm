let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [a, b] = input[0].split(" ").map((x) => Number(x));

let arr1 = new Array(a).fill(new Array(b).fill(0));
let arr2 = new Array(a).fill(new Array(b).fill(0));

for (let i = 0; i < a; i++) {
  arr1[i] = input[i + 1].split(" ").map((x) => Number(x));
  arr2[i] = input[i + 1 + a].split(" ").map((x) => Number(x));
}

let result = "";

for(let i = 0; i<a; i++){
  for(let j = 0; j<b; j++){
    result += (arr1[i][j] + arr2[i][j]) + " ";
  }
  result += "\n";
}

console.log(result);