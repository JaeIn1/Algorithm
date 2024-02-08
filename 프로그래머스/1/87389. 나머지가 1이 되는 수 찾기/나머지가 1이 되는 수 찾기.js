function solution(n) {
    let answer = 0;
    let i = 1;
    while(1){
        if(n % i === 1){
            answer = i;
            break;
        }
        i++;
    }
    return answer;
}