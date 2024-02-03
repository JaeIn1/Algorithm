function solution(cards1, cards2, goal) {
    var answer = '';
    let cnt = 0;
    for(let i = 0; i < goal.length; i++){
        let str = goal[i];
        
        if(cards1[0] === str){
            cards1.shift();
            cnt++;
        }
        else if(cards2[0] === str){
            cards2.shift();
            cnt++;
        }
        else{
            answer = "No";
        }
    }
    if(cnt === goal.length) answer = "Yes";
    return answer;
}