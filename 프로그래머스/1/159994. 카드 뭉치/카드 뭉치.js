function solution(cards1, cards2, goal) {
    var answer = '';
    let flag = true;
    goal.forEach((e , i) =>{
        if(cards1[0] === e) cards1.shift();
        else if(cards2[0] === e) cards2.shift();
        else flag = false;
    });
    answer = "Yes";
    if(!flag) return "No";
    return answer;
}