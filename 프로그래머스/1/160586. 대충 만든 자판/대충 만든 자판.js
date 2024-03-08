function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach((e) =>{
        let key = e.split("");
        let sum = 0;
        
        key.forEach((e , i) =>{
            let n = Infinity;
            for(let j = 0; j < keymap.length; j++){
                let idx = keymap[j].indexOf(e);
                if(idx === -1){
                    continue;
                }
                n = Math.min(n , idx + 1);
            }
            sum += n;
        })
        answer.push(sum);
    })
    
    answer = answer.map((e) =>{
        if(e === Infinity) e = -1;
        return e;
    });
    return answer;
}