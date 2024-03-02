function solution(x) {
    var answer = true;
    let arr = x.toString().split("").map(Number);
    let sum = arr.reduce((a , b) => a + b , 0);
    if(x % sum === 0) answer = true;
    else answer = false;
    return answer;
}