let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = Array.from({length:100} , ()=> new Array(100).fill(0));
let trues = 0;

for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(" ").map((x)=>+x);
  for (let i = a; i < a + 10; i++) {
    for (let j = b; j < b + 10; j++) {
      arr[i][j] = 1;
    }
  }
}
arr.forEach((e) => {
  e.forEach((ee)=>{
    if(ee === 1) trues++;
  })
});
console.log(trues);