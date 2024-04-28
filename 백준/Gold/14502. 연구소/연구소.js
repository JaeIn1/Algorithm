let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let arr = [];
let temp = [];
let result = 0;

for (let i = 0; i < n; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
  temp[i] = input[i + 1].split(" ").map(Number);
}

dfs(0);
console.log(result);

function dfs(count) {
  if (count === 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = arr[i][j]; // 임시 배열에 저장
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] === 2) virus(i, j);
      }
    }
    result = Math.max(result, getScore());
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        arr[i][j] = 1;
        dfs(count + 1);
        arr[i][j] = 0;
      }
    }
  }
}

function virus(i, j) {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let k = 0; k < 4; k++) {
    let nx = i + dx[k];
    let ny = j + dy[k];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (temp[nx][ny] === 0) {
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

function getScore() {
  // 현재 맵에서 안전 영역의 크기 계산하는 메서드
  let score = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (temp[i][j] === 0) score += 1;
  return score;
}
