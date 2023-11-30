let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n , count] = input[0].split(" ").map((x)=>Number(x));

let arr = new Array(n).fill(0);
for(let i = 0; i< count; i++){
  let a = input[i+1].split(" ").map((x)=>Number(x));
  let cnt = a[2];

  for(let j = a[0] -1; j <= a[1] -1; j++){
    arr[j] = cnt;
  }
}
let result = "";
for(let i = 0; i<arr.length; i++){
  result += arr[i] + " ";
}
console.log(result);