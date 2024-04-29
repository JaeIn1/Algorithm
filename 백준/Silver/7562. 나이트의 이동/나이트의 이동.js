let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let testcase = Number(input[0]);
let line = 1;

class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(x) {
    this.item.push(x);
  }
  dequeue() {
    return this.item.shift();
  }
  getLength() {
    return this.item.length;
  }
  isEmpty() {
    return this.item.length === 0 ? 1 : 0;
  }
}
let dx = [-2 , -2 , -1 , -1 , 1 , 1,  2,  2];
let dy = [-1 , 1 , -2 , 2 , -2 , 2 , -1 , 1];

while (testcase--) {
  let queue = new Queue();
  let n = Number(input[line]);
  let visited = [];
  for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(0);
  let [sx, sy] = input[line + 1].split(" ").map(Number);
  let [ex, ey] = input[line + 2].split(" ").map(Number);
  
  function bfs() {
    queue.enqueue([sx, sy]);

    while (queue.getLength() !== 0) {
      let [cx, cy] = queue.dequeue();
      if(cx === ex && cy === ey) return visited[cx][cy];
      for (let i = 0; i < 8; i++){
        let nx = cx + dx[i];
        let ny = cy + dy[i];
        if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if(!visited[nx][ny]){
          queue.enqueue([nx , ny]);
          visited[nx][ny] = visited[cx][cy] + 1;
        }
      }
    }
  }
  console.log(bfs());
  line += 3;
}


