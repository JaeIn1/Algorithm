const fs = require("fs");
let [cnt, num] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(data) {
    this.item.push(data);
  }
  dequeue() {
    return this.item.shift();
  }
  front() {
    return this.item[0];
  }
  back() {
    return this.item[this.item.length - 1];
  }
  getSize() {
    return this.item.length;
  }
  isEmpty() {
    return this.item.length === 0;
  }
}
const queue = new Queue();
let result = [];

for(let i = 1; i<=cnt; i++){
  queue.enqueue(i);
}

let count = 0;
while (queue.getSize() > 0) {
  count++;
  let item = queue.dequeue();
  if(count % num !== 0){
    queue.enqueue(item);
  }else{
    result.push(item);
  }
}

console.log(`<${result.join(", ")}>`);