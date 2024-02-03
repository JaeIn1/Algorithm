function solution(cards1, cards2, goal) {
    var answer = '';
    
    for(let i = 0; i < goal.length; i++){
        let str = goal[i];
        
        if(cards1[0] === str) cards1.shift();   
        else if(cards2[0] === str) cards2.shift();    
        else return "No";    
    }
    
    return "Yes";
}