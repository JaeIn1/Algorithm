function solution(N, stages) {
    let answer = [];
    let result = [];
    let totalPiple = stages.length;
    
    let map = new Map();
    stages.sort((a , b) => a - b);
    stages.forEach((e) =>{
        map.set(e , map.has(e) ? map.get(e) + 1 : 1);
    });
    
    for(let i = 1; i <= N; i++){
        if(map.has(i)){
            let failRate = (map.get(i) / totalPiple);
            result.push([i , failRate]);
            totalPiple -= map.get(i);
        }
        else{
            result.push([i , 0]);
        }
    }
    
    result.sort((a , b) => b[1] - a[1]);
    return result.map((e) => e[0]);
}