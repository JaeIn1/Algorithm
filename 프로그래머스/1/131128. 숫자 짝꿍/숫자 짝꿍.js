function solution(x, y){
  let answer = "";
    let mapX = new Map();
    let mapY = new Map();
    
    for(let i = 0; i < x.length; i++){
        let s = x[i];
        mapX.set(s , mapX.get(s) ? mapX.get(s) + 1 : 1);
    }
    for(let i = 0; i < y.length; i++){
        let s = y[i];
        mapY.set(s , mapY.get(s) ? mapY.get(s) + 1 : 1);
    }
    
    for(let i = 9; i >= 0; i--){
        if(mapX.get(`${i}`) && mapY.get(`${i}`)){
            let n = Math.min(mapX.get(`${i}`) , mapY.get(`${i}`));
            answer += `${i}`.repeat(n);
        }
    }
    if(answer.length === 0) answer += "-1";
    if(answer[0] === "0") answer = "0";
    return answer;
}