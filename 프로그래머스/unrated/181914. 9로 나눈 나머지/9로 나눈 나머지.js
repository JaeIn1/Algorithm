function solution(number) {
    let result = [...number].map((x)=>Number(x));
    let answer = result.reduce((a,b) => {
        return a + b;
    },0) % 9;
    return answer;
}