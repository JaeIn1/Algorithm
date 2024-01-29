let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 데이터의 수(N)
let arr = input[1].split(' ').map(Number);
arr.reverse();

let d = [0];

function lowerBound(arr, target , start, end){
  while(start < end){
    let mid = parseInt((start + end) / 2);
    if(arr[mid] >= target) end = mid;
    else{
      start = mid + 1;
    }
  }
  return end;
}
for(let i of arr){
  if(d[d.length -1] < i){
    d.push(i);
  }
  else{
    let index = lowerBound(d, i , 0 , d.length);
    d[index] = i;
  }
}
console.log(n - (d.length -1));