function solution(num) {
    let count = 0;
    while(count < 500){
        if(num === 1) return count;
        count++;
        num = num % 2 === 0 ? num /= 2 : num * 3 + 1;
    }
    return -1;
}