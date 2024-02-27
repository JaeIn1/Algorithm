let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [a , b] = input[0].split(" ").map(Number);

let map = new Map();
for(let i = 1; i <= a; i++) map.set(input[i] , 0);
for(let i = a + 1; i <= a + b; i++){
  if(map.has(input[i])) map.set(input[i] , map.get(input[i]) + 1);
}

for(let [key , value] of map){
  if(value === 0) map.delete(key);
}

console.log(map.size);
let result = [];
for(let key of map.keys()) result.push(key);

result.sort();
for(let s of result){
  console.log(s);
}