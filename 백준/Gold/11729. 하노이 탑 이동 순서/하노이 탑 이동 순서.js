let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
const answer = [];
let cnt = 0;

function hanoiTower(num, from, other, to) {
  if (num === 0) { //종료조건
    return;
  } else {
    hanoiTower(num - 1, from, to, other); // 남은공간과 엔드지점을 바꾼다.  
    answer.push([from, to]);
    cnt++;
    hanoiTower(num - 1, other, from, to);
  }
}

hanoiTower(N, "1", "2", "3");
console.log(cnt);
console.log(answer.map((v) => v.join(" ")).join("\n"));