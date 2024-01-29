let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]); // 데이터의 수(N)
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]); // 쿼리의 수(M)
let query = input[3].split(' ').map(Number);
arr.sort((a, b) => a - b); // 이진 탐색을 위한 오름차순 정렬
answer = '';

function lowerBound(arr , target , start , end){
  while(start < end){
    let mid = parseInt((start + end) / 2);
    if(arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr , target , start , end){
  while(start < end){
    let mid = parseInt((start + end) / 2);
    if(arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr , left , right){
  let rightIndex = upperBound(arr , right , 0, arr.length);
  let leftIndex = lowerBound(arr , left , 0, arr.length);

  return rightIndex- leftIndex;
}
for (let i = 0; i < m; i++) {
// 값이 query[i]인 데이터의 개수 계산
let cnt = countByRange(arr, query[i], query[i]);
answer += cnt + ' ';
}
console.log(answer);