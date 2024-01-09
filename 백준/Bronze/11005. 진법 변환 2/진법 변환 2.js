let fs = require("fs");
let [num , base] = fs.readFileSync("/dev/stdin").toString().split(" ").map((x)=>Number(x));

let result = num.toString(base);
let result_str = "";
for (let i = 0; i < result.length; i++) {
  if ("a" <= result[i] && result[i] <= "z") {
    result_str += result[i].toUpperCase();
  }else result_str += result[i];
}
console.log(result_str);