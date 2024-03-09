function solution(k, score) {
    let result = [];
    var answer = [];
    
    score.forEach((e) =>{
        result.push(e);
        result.sort((a , b) => a - b);
        if(result.length > k){
            result.splice(0, 1);
        }
        answer.push(result[0]);
    })
    return answer;
}