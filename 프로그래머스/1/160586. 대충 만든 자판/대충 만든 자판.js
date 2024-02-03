function solution(keymap, targets) {
    var answer = [];
    
    for(let i = 0; i < targets.length; i++){
        let sum = 0;
        
        targets[i].split("").forEach((e) =>{
            let count = Infinity;
            keymap.forEach((key) => {
                let cnt = key.indexOf(e);
                if(cnt > -1){
                    count = Math.min(count , cnt + 1);
                }
            })
            sum += count;
        })
        answer.push(sum);
    }
    answer = answer.map((e) => {
        if(e === Infinity) e = -1;
        return e;
    })
    return answer;
}