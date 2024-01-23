const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let dis = input[1].split(" ").map(Number); 
let disSum = dis.reduce((a,b) => a + b);
let price = input[2].split(" ").map(Number);


let result = BigInt(0);

for(let i = 0; i < price.length -1; i++){
  if(price[i] < price[i+1]){
    price[i+1] = price[i];
  }
}

for(let i = 0; i < price.length -1; i++){
  result += BigInt(dis[i]) * BigInt(price[i]);
}

console.log(String(result));