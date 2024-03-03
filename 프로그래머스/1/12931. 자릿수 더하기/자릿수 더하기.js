function solution(n)
{
    var answer = 0;
    let arr = n.toString().split("").map(Number);
    answer = arr.reduce((a , b) => a + b , 0);

    return answer;
}