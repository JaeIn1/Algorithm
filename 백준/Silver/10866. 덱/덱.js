const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input.map((e) => e.split(" "));

class Queue{
  constructor(){
    this.item = [];
  }
  pushFront(x){
    this.item.unshift(x);
  }
  enqueue(x){
    this.item.push(x);
  }
  dequeue(){
    return this.item.shift() ?? -1;
  }
  popBack(){
    return this.item.pop() ?? -1;
  }
  front(){
    return this.item[0] ?? -1;
  }
  back(){
    return this.item[this.item.length-1] ?? -1;
  }
  getSize(){
    return this.item.length;
  }
  isEmpty(){
    return this.item.length === 0 ? 1 : 0;
  }
}
const queue = new Queue();
let Deque = [];

for(let i = 0; i<num; i++){
  let [cmd , val] = arr[i];
  if(cmd === "push_front") queue.pushFront(val);
  if(cmd === "push_back") queue.enqueue(val);
  if(cmd === "pop_front"){
    let n = queue.dequeue();
    Deque.push(n);
  }
  if(cmd === "pop_back"){
    let n = queue.popBack();
    Deque.push(n);
  }
  if(cmd === "size") Deque.push(queue.getSize());
  if(cmd === "empty") Deque.push(queue.isEmpty());
  if(cmd === "front") Deque.push(queue.front());
  if(cmd === "back") Deque.push(queue.back());
}

console.log(Deque.join("\n"));