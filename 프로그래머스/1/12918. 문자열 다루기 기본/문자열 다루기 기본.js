function solution(s) {
    var answer = true;
    let arr = s.split("");
    arr.forEach((e) =>{
        if(isNaN(e)) answer = false;
    })
    if(arr.length !== 4 && arr.length !== 6) answer = false;
    
    
    return answer;
}