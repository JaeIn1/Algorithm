function solution(s){
    var answer = true;
    let p = 0 , y = 0;
    let str = s.toLowerCase().split("");
    str.forEach((e) =>{
        if(e === "p") p++;
        if(e === "y") y++;
    })
    
    return p === y ? true : false;
}