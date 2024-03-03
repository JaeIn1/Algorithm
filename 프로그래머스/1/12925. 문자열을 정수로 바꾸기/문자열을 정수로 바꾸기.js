function solution(s) {
    var answer = 0;
    if(s[0] === "-") answer = Number(s.slice(1)) * -1;
    else answer = Number(s);
    return answer;
}