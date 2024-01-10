let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [cnt,num] = input[0].split(" ").map(Number);
let card = input[1].split(" ").map(Number);

let result = [];
for(let i = 0; i<cnt-2; i++){
  for(let j = i+1; j<cnt -1; j++){
    for(let k = j+1; k < cnt; k++){
      if(card[i] !== card[j] && card[i] !== card[k] && card[j] !== card[k]){
        if(card[i] + card[j] + card[k] <= num){
          result.push(card[i] + card[j] + card[k]);
        }
      }
    }
  }
}
console.log(Math.max(...result))