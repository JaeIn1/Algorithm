function solution(N, stages) {
    var answer = [];
    let arr = [];
    
    for(let i = 1; i <= N; i++){
        let fail = 0;
        let l = stages.length;
        let cnt = 0;
        stages.forEach((e) => {
            if(e <= i){
              cnt++;
            }
        })
        fail = cnt / l;
        arr.push([i , fail]);
        stages = stages.filter((e) => e > i);
    }
    
    arr.sort((a , b) =>{
        if(a[1] === b[1]){
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });
    arr.forEach((e) => {
        answer.push(e[0]);
    })
    return answer;
}