function solution(k, score) {
    let result = [];
    var answer = [];
    
    score.forEach((e) =>{
        result.push(e);
        result.sort((a , b) => a - b);
        if(result.length > k) result.shift();
        answer.push(result[0]);
    })
    return answer;
}