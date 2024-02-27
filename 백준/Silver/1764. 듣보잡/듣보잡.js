let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [a , b] = input[0].split(" ").map(Number);

let map1 = new Set();
let map2 = new Set();

for(let i = 1; i <= input.length; i++){
  if(i <= a) map1.add(input[i]);
  else map2.add(input[i]);
}

let result = [...map1].filter((data) => map2.has(data)).sort();
console.log(result.length + "\n" + result.join("\n"));