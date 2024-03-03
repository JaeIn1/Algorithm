function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if(sqrt % 1 !== 0) return -1;
    else return Math.pow(sqrt + 1 , 2);
}