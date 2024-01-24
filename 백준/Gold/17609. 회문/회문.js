const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input;

function palindrome(x){
  return x === x.split("").reverse().join("");
}

for(let i = 0; i< num; i++){
  let data = arr[i];
  if(palindrome(data)) console.log(0);
  else{
    let found = false;
    let n = data.length;
    for(let j= 0; j< parseInt(n/2); j++){
      if(data[j] !== data[n - j - 1]){ //대칭이 아닌 인덱스를 찾는 경우
        if(palindrome(data.slice(0, j) + data.slice(j+1))) found = true;
        if(palindrome(data.slice(0, n - j - 1) + data.slice(n -j))) found = true;
        break;
      }
    }
    if(found) console.log(1);
    else console.log(2);
  }
}