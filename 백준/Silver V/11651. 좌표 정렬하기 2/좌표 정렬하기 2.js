let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);
let arr = [];
for(let i = 1; i <= num; i++){
  let [a, b] = input[i].split(" ").map(Number);
  arr.push([a , b]);
}

arr.sort((a , b) => {
  if(a[1] === b[1]){
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
let answer = "";
for(let i of arr){
  answer += i[0] + " " + i[1] + "\n";
}
console.log(answer);