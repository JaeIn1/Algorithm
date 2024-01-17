const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];
let arr = input[0].split(/(<[^>]*>)/);
arr.forEach((e , i) =>{
  let str = "";
  if(e[0] === "<"){
    result.push(e);
  }else{
    e.split(" ").forEach((e) => {
      str += e.split("").reverse().join("") + " ";
    });
  }
  result.push(str.trim());
});

console.log(result.join(""));