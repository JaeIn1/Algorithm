let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let n = Number(input[0]);

function check(data){
  let setObj = new Set(data[0]);

  for(let i = 0; i<data.length; i++){
    if(data[i] !== data[i+1]){
      if(setObj.has(data[i+1])){
        return false;
      }else{
        setObj.add(data[i+1]);
      }
    }
  }
  return true;
}

let result = 0;
for(let i = 1; i<=n; i++){
  if(check(input[i])) result += 1;
}

console.log(result); 
