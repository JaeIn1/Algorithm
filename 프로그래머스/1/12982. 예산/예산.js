function solution(d, budget) {
    var answer = 0;
    d.sort((a , b) => a - b);
    let i = 0;
    while(budget > 0){
        budget -= d[i];
        if(budget < 0 || i === d.length) break;
        answer++;
        i++;
    }
    return answer;
}