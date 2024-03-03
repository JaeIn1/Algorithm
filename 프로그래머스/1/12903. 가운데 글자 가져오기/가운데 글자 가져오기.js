function solution(s) {
    var answer = '';
    if(s.length % 2 === 1) answer = s[parseInt(s.length / 2)];
    else{
        let n = parseInt(s.length / 2) - 1;
        answer = s.slice(n , n + 2);
    }
    return answer;
}