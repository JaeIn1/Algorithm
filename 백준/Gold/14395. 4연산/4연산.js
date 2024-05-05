let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let queue = [];
let visited = new Set([n]);
let found = false;

if (n === m) {
  console.log(0);
  process.exit();
}

function bfs() {
  queue.push([n, '']);

  while (queue.length !== 0) {
    let [value, opers] = queue.shift();
    if (value > 1e9) continue;
    if (value === m) {
      console.log(opers);
      found = true;
      break;
    }
    for (let oper of ["*" , "+", "-", "/"]) {
      let nxtValue = value;
      if (oper === "*") nxtValue *= value;
      if (oper === "+") nxtValue += value;
      if (oper === "-") nxtValue -= value;
      if (oper === "/" && value !== 0) nxtValue = 1;
      if (!visited.has(nxtValue)) {
        queue.push([nxtValue, opers + oper]);
        visited.add(nxtValue);
      }
    }
  }
  if (!found) {
    console.log(-1);
  }
}

bfs();
