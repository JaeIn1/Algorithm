function solution(array, commands) {
    var answer = [];
    for(let i = 0; i< commands.length; i++){
        let [a,b,c] = commands[i];
        let arr = array.slice(a-1, b).sort((a,b) => a - b);
        answer.push(arr[c-1]);
    }
    return answer;
}