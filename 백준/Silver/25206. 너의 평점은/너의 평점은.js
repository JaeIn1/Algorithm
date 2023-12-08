const table = {
  "A+": 4.5, "A0": 4.0, "B+": 3.5, "B0": 3.0, "C+": 2.5, "C0": 2.0, "D+": 1.5, "D0": 1.0, "F": 0.0
}

// split은 객체에만 사용가능하니 한번 사용후에는 배열이 되므로 map을 사용해 중복split
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(x => x.split(" "));
let s = 0; // 전공 평점
let t = 0; // 학점 총합(학점 * 전공 평점)
for (let [a, b, c] of input) {
  if (c === "P") continue;
  t += b * table[c]; // string * string = number
  s += +b; // s에 숫자화된 b를 계속 더하기
}
console.log(t / s);