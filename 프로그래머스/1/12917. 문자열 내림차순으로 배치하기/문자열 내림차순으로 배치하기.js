function solution(s) {
    var answer = [];
    let arr = s.split("");
    arr.sort().reverse();
    
    return arr.join("");
}