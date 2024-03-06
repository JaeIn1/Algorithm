let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [a,b,c] = input.shift().split(" ").map(Number);

let sum = 0;
let arr = [];
for(let i = 0; i < input.length; i++){
  let [x , y] = input[i].split(" ").map(Number);
  for(let j = x; j < y; j++){
    let n = arr[j] ? arr[j] + 1 : 1;
    arr[j] = n;
  }
}

arr.forEach((e) =>{
  if(e === 1) sum += e * a;
  else if(e === 2) sum += e * b;
  else if(e === 3) sum += e * c;
});
console.log(sum);