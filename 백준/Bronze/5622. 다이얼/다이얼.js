let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().split("");
let obj = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
}

let result = 0;
for(let i = 0; i<str.length; i++){
  for(let j=2; j<= 9; j++){
    if(obj[j].includes(str[i])){
      result += j+1;
      break;
    }
  }
}
console.log(result);