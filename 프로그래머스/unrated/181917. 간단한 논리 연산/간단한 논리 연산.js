function solution(x1, x2, x3, x4) {
    let answer = true;
    let a = x1 || x2;
    let b = x3 || x4;
    answer = a && b;
    return answer;
}