const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());
let arr = input.map((e) => e.split(" "));

class Queue{
  constructor(){
    this.item = [];
  }
  enqueue(data){
    this.item.push(data);
  }
  dequeue(){
    return this.item.shift();
  }
  front(){
    return this.item[0];
  }
  back(){
    return this.item[this.item.length -1];
  }
  getSize(){
    return this.item.length;
  }
  isEmpty(){
    return this.item.length === 0;
  }
}
let result = [];
const queue = new Queue(); 
for(let i = 0; i<arr.length; i++){
  let cmd = arr[i];
  if(cmd[0] === "push"){
    queue.enqueue(cmd[1]);
  }
  if(cmd[0] === "pop"){
    if(queue.isEmpty()) result.push(-1);
    else result.push(queue.dequeue());
  }
  if(cmd[0] === "size"){
    result.push(queue.getSize());
  }
  if(cmd[0] === "empty"){
    if(queue.isEmpty()) result.push(1);
    else result.push(0);
  }
  if(cmd[0] === "front"){
    if(queue.isEmpty()) result.push(-1);
    else result.push(queue.front());
  }
  if(cmd[0] === "back"){
    if(queue.isEmpty()) result.push(-1);
    else result.push(queue.back());
  }
}

let answer = "";
for(let i of result)
  answer += i + "\n";
console.log(answer);
