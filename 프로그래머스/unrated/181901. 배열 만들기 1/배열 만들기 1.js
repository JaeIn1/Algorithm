function solution(n, k) {
    var answer = [];
    let plus = k;
    while(k <= n){
        answer.push(k);
        k+=plus;
    }
    return answer;
}