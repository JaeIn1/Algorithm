let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = input[1].split(" ").map(Number);
let t = Number(input[2]);
let start = 0;
let end = arr.length - 1;
let answer = 0;
arr.sort((a , b) => a - b);

while(start < end){
  if(arr[start] + arr[end] === t){
    answer++;
    start++;
  }
  else{
    if(arr[start] + arr[end] > t){
      end--;
    }
    else if(arr[start] + arr[end] < t){
      start++;
    }
  }
}
console.log(answer);