function solution(arr, divisor) {
    var answer = [];
    arr.forEach((e) =>{
        if(e % divisor === 0) answer.push(e);
    })
    return answer.length > 0 ? answer.sort((a , b) => a - b) : [-1];
}