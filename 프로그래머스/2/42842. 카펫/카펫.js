function solution(brown, yellow) {
    var answer = [];
    let n = parseInt(brown / 2);
    let sum = yellow + brown;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j < n; j++){
            if(i >= j && i * j === sum){
                if(brown === (i * 2) + (j * 2) - 4) answer.push([i , j]);
            }
        }
    }
    
    return answer[0];
}