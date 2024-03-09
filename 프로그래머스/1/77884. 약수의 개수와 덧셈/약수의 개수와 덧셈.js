function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right; i++){
        let n = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                n++;
                if(i / j !== j) n++;
            }
        }
        if(n % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}