function solution(targets) {
    var answer = 0;
    let end = 0;
    
    targets = targets.sort((a , b) => a[1] - b[1]);
    
    for(let [s , e] of targets){
        if(end <= s){
            answer++;
            end = e;
        }
    }

    return answer;
}