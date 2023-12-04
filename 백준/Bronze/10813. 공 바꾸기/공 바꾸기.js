let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n , count] = input[0].split(" ").map((x)=>Number(x));

let arr = new Array(n).fill(0);
for(let i =0; i<n ; i++){
  arr[i] = i+1;
}

for(let i= 0; i<count;  i++){
  let [a,b] = input[i+1].split(" ").map((x)=>Number(x-1));
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
console.log(arr.join(" "));