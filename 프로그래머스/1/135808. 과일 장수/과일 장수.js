function solution(k, m, score) {
    let sum = 0;
    score.sort((a , b) => b - a);
    for(let i = 0; i < score.length; i+=m){
        if(i + m > score.length) break;
        let arr = score.slice(i , i + m);
        let n = Math.min(...arr);
        sum += n * m;
    }
    return sum;
}