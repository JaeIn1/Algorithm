function solution(price, money, count) {
    var answer = money;
    let sum = 0;
    for(let i = 1; i <= count; i++){
        sum += price * i;
    }
    return sum - money > 0 ? sum - money : 0;
}