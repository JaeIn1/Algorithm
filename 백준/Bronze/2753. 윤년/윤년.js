let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString();

let year = Number(inputData);

if((year%4 === 0 && year%100 !== 0) || year%400 === 0){
	console.log(1); 
}else{
 	console.log(0); 
}