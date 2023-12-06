let fs = require('fs');
let [a,b] = fs.readFileSync('/dev/stdin').toString().split(" ");
let newA = Number(a.split("").reverse().join(""));
let newB = Number(b.split("").reverse().join(""));
console.log(Math.max(newA , newB));