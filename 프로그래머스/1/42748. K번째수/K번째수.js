function solution(array, commands) {
    var answer = [];
    commands.forEach((e) => {
        let [start , end , k] = e;
        let arr = array.slice(start - 1 , end).sort((a , b) => a - b);
        answer.push(arr[k - 1]);
    })
    return answer;
}