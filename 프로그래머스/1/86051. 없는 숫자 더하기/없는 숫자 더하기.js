function solution(numbers) {
    var answer = -1;
    let arr = 0;
    for(let i = 0; i <= 9; i++){
        if(numbers.includes(i)) continue;
        else arr += i;
    }
    
    return arr
}