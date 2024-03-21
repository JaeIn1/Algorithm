function solution(s) {
    let answer = [];
    let left = 0;
    let right = 0;
    let prevCount = 1;
    let curCount = 0;
    let firstStr = s[0];
    
    for(let i = 1; i < s.length; i++){
        if(firstStr === s[i]){
            prevCount++;
            right++;
        }
        else{
            curCount++;
            right++;
            if(prevCount === curCount){
                answer.push(s.slice(left , right + 1));
                left = i + 1;
                right = i + 1;
                firstStr = s[i + 1];
                prevCount = 1;
                curCount = 0;
                i++;
            }
        }
    }
    return answer.join("").length < s.length ? answer.length + 1 : answer.length;
}