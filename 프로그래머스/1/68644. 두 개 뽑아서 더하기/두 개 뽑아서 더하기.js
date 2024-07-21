function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length -1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let num = numbers[i] + numbers[j];
            if(!answer.includes(num)) answer.push(num);
        }
    }
    return answer.sort((a , b) => a - b);
}