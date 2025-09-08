const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const board = input.slice(1).map((e) => e.split(""));

let maxCnt = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < 4; k++) {
      let nx = i + dx[k];
      let ny = j + dy[k];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
        continue;
      }

      if (board[i][j] !== board[nx][ny]) {
        [board[i][j], board[nx][ny]] = [board[nx][ny], board[i][j]];

        maxCnt = Math.max(maxCnt, search());

        [board[nx][ny], board[i][j]] = [board[i][j], board[nx][ny]];
      }
    }
  }
}

function search() {
  let [row, col, max_row, max_col] = [1, 1, -1e9, -1e9];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] == board[i][j + 1]) {
        row++;
      } else {
        row = 1;
      }
      max_row = Math.max(row, max_row);
    }
    row = 1;
  }

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n - 1; i++) {
      if (board[i][j] == board[i + 1][j]) {
        col++;
      } else {
        col = 1;
      }
      max_col = Math.max(col, max_col);
    }
    col = 1;
  }

  return Math.max(max_row, max_col);
}

console.log(maxCnt);
