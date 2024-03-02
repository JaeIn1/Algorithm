function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((a , b) => a + b , 0);
    answer = sum / arr.length;
    return answer;
}