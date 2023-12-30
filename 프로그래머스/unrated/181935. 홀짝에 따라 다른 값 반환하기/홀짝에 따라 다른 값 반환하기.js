function solution(n) {
    let sum = 0;
    if(n % 2 === 0){
        for(let i = 2; i<=n; i+=2){
            if(i % 2 === 0) sum += i*i;
        }
    }
    else if(n % 2 === 1){
        for(let i = 1; i<=n; i+=2){
            if(i % 2 === 1) sum += i;
        }
    }
    return sum;
}