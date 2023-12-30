function solution(a, b) {
    let result1 = parseInt(String(a) + String(b));
    let result2 = parseInt(String(b) + String(a));
    return Math.max(result1 , result2);
}