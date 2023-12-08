const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input[0])

function solution(str) {

    let lowStr = str.toLowerCase(); // 대소문자를 구분하지 않기 때문에 소문자로 변경,
    let obj = {}; // 문자를 key로 넣고 value를 count로 쓰기 위해 obj 만들어주고

    for(let i=0; i<lowStr.length; i++){

        if(obj[lowStr[i]] === undefined) {
            obj[lowStr[i]] = 1;  //key가 없을 땐 value를 1로 설정해서 넣어주고
        } else {
            obj[lowStr[i]] += 1 //key가 있으면 +1을 해주는 로직
        }
    }

    let result ="";
    let count=0

    for(char in obj){ // obj 전체 property를 확인 해야 하므로 for in 사용
        if(obj[char] > count){ // count와 value 비교 해서 value가 더 크면
            count = obj[char]; // count값 교체해주고
            result = char.toUpperCase(); // result도 대문자로 변환해서 교체해준다.
        } else if (obj[char] === count){ //만약 count와 value가 같은 값이 있다면
            result ='?'; // result를 ?로 교체해준다.
        }
    }
    console.log(result);
}