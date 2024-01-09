let fs = require("fs");
let [num , divider] = fs.readFileSync("/dev/stdin").toString().split(" ");
let result = parseInt(num , Number(divider));
console.log(result);
