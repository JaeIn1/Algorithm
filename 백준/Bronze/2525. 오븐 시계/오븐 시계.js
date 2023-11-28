let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [hour , minute] = input[0].split(' ').map(Number);
let oven = Number(input[1]);

let sum_min = hour * 60 + minute + oven;
sum_min %= 1440;

hour = parseInt(sum_min / 60);
minute = sum_min % 60;

console.log(hour + " " + minute);