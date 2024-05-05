let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let queue = [];
let visited = [];
let data = [];
for(let i = 0; i < n; i++){
  visited[i] = input[i + 1].split(" ").map(Number);
  for(let j = 0; j < n; j++){
    if(visited[i][j] !== 0) data.push([visited[i][j] , 0 , i , j]);
  }
}

data.sort((a, b) => a[0] - b[0]);
for(let x of data) queue.push(x);

let [time , tx , ty] = input[n + 1].split(" ").map(Number);

let dx = [-1 , 1 , 0 , 0];
let dy = [0 , 0 , -1 , 1];

while(queue.length !== 0){
  let [virus , s , x  , y] = queue.shift();
  if(s === time) break;

  for(let i = 0; i < 4; i++){
    let nx = x + dx[i];
    let ny = y + dy[i];
    if(nx >= 0 && nx < n && ny >= 0 && ny < n){
      if(visited[nx][ny] === 0){
        visited[nx][ny] = virus;
        queue.push([virus , s + 1 , nx,  ny]);
      }
    }
  }
}

console.log(visited[tx - 1][ty - 1]);





