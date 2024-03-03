function solution(n) {
    var answer = 0;
    let arr= n.toString().split("").map(Number);
    arr.sort((a , b) => b - a);
    return Number(arr.join(""));
}