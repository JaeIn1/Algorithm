let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n , k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let sum = 0;
for(let i = 0; i < n; i++){
  if(i < k) sum += arr[i];
}

let max = sum;
let left = 0;
let right = k - 1;
let count = 1;
while(true){
  left++;
  right++;
  if(right > n - 1) break;
  sum = sum + arr[right] - arr[left - 1];
  if(sum === max) count++;
  else if(sum > max){
    max = sum;
    count = 1;
  }
}
if(max === 0) console.log("SAD");
else console.log(max + "\n" + count);