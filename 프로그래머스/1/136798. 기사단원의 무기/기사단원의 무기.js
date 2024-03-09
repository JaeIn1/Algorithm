function solution(number, limit, power) {
  let answer = 0;
    
    for(let i = 1; i <= number; i++){
        let n = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                n++;
                if(i / j !== j) n++;
            }
        }
        if(n > limit) n = power;
        answer += n;
    }
  
  return answer;
}