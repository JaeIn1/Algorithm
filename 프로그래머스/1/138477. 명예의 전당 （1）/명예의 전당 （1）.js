function solution(k, score) {
    let result = [];
    var answer = [];
    
    score.forEach((e) =>{
        result.push(e);
        result.sort((a , b) => a - b);
        if(result.length > k){
            let min = Math.min(...result);
            let idx = result.indexOf(min);
            result.splice(idx, 1);
        }
        answer.push(result[0]);
    })
    return answer;
}