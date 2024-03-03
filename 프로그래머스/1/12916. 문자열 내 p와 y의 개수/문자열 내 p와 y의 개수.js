function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;
    let str = s.toLowerCase();
    str.split("").forEach((e) =>{
        if(e === "p") p++;
        if(e === "y") y++;
    })
    if(p === y) answer = true;
    else answer = false;
    
    if(p === 0 && y === 0) answer = true;

    return answer;
}