let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [arrCount , num] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = arr.filter((el)=>el < num);
let str = "";
for(let i=0; i<result.length; i++){
  str += result[i] + " ";
}
console.log(str);