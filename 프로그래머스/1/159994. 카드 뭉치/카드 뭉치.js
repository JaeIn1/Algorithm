function solution(cards1, cards2, goal) {
    let answer = "Yes";
    goal.forEach((e) =>{
        if(cards1[0] === e) cards1.shift();
        else if(cards2[0] === e)cards2.shift();
        else answer = "No";
    })
    return answer;
}