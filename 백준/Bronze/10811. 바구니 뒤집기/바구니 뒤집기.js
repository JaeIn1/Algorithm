let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n , count] = input[0].split(" ").map((x)=>Number(x));

let arr = [];
for(let i =0 ; i<n; i++){
  arr[i] = i+1;
}

for(let i =0 ; i<count; i++){
  let [a , b] = input[i+1].split(" ").map((x)=>Number(x));
  let newArr = arr.slice(a-1 , b).reverse();
  arr.splice(a-1 , newArr.length , ...newArr)
}

console.log(arr.join(" "));
