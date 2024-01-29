let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]); // 배열의 크기(N)
let k = Number(input[1]); // 인덱스 K
let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값
let result = 0;

while(start <= end){
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for(let i = 1; i<=n; i++){
    total += Math.min(parseInt(mid / i) , n);
  }
  if(total >= k){
    result = mid;
    end = mid -1;
  }else start = mid + 1;
}
console.log(result);