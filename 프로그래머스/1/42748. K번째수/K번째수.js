function solution(array, commands) {
    var answer = [];
    commands.forEach((e) =>{
        let [a , b , c] = e;
        let temp = array.slice(a - 1 , b);
        temp.sort((a , b) => a - b);
        answer.push(temp[c - 1]);
    })
    return answer;
}