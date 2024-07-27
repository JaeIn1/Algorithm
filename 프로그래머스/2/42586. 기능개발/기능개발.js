function solution(progresses, speeds) {
    var answer = [];
    let queue = [];

    let days = progresses.map((e , i) => Math.ceil((100 - e) / speeds[i]));
    let max = days[0];
    let count = 0;
    
    for(let i = 0; i < progresses.length; i++){
        if(days[i] <= max) count++;
        else{
            answer.push(count);
            count = 1;
            max = days[i];
        }
    }
    answer.push(count);
    return answer;
}