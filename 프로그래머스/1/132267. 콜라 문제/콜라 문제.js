function solution(a, b, n) {
    var answer = 0;
    
    
    while(n >= a){
        let cnt = parseInt(n / a) * b;
        answer += cnt;
        n = cnt + (n % a);     
    }
    return answer;
}