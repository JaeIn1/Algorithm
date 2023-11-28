let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

let year = Number(inputData[0]);

if((year%4 === 0 && year%100 !== 0) || year%400 === 0){
	console.log(1); 
}else{
 	console.log(0); 
}