let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let MAX = 100001;
let visited = new Array(MAX).fill(0); // 각 위치까지 최단시간

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

let queue = new Queue();

function bfs() {
  queue.enqueue(n);

  while (queue.getLength() !== 0) {
    let cur = queue.dequeue();
    if (cur === m) return visited[cur];

    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX) continue;
      if (visited[nxt] === 0) {
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      }
    }
  }
}

console.log(bfs());
