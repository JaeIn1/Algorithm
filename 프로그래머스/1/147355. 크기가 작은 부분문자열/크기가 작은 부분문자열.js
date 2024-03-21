function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length - p.length + 1; i++){
        let n = Number(t.slice(i , i + p.length));
        if(n <= Number(p)) answer++;
    }
    return answer;
}