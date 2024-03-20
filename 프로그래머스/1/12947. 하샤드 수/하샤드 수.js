function solution(x) {
    var answer = true;
    let arr = x.toString().split("").map(Number);
    let sum = arr.reduce((a , b) => a + b , 0);
    answer = x % sum === 0? true : false;
    return answer;
}