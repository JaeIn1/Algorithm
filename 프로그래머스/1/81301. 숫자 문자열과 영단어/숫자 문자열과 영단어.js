function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++){
        let str = numbers[i];
        answer = answer.split(str).join(i);
    }

    return Number(answer);
}