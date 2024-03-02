function solution(num) {
    var answer = 0;
    let i = 0;
    while(num !== 1){
        console.log(num);
        if(i === 500){
            answer = -1;
            break;
        }
        if(num % 2 === 0) num /= 2;
        else if(num % 2 === 1) num = num * 3 + 1;
        answer++;
        i++
    }
    return answer;
}