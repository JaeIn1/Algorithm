function solution(n) {
    let answer = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            answer.push(i);
            if(n / i !== i) answer.push(n / i);
        }
    }
    return answer.reduce((a , b) => a + b , 0);
}