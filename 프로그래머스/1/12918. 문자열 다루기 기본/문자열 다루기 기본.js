function solution(s) {
    var answer = true; // 기본적으로 true로 설정
    let str = s.split("");
    
    if(str.length === 4 || str.length === 6){
        str.forEach((e) =>{
            if(isNaN(e)) answer = false;
        })
    }
    else answer = false;

    return answer;
}