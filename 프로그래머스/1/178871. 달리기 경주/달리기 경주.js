function solution(players, callings) {
    const obj = {}; // 배열의 순서를 자주 바꾸는 문제에서는 객체를 활용 , 시간복잡도 절약!!
    for(let i = 0; i< players.length; i++){
        obj[players[i]] = i;
    }
    
    for(let i = 0; i< callings.length; i++){
        let index = obj[callings[i]];
        let temp = players[index -1];
        
        players[index -1] = callings[i];
        players[index] = temp; 
        
        obj[callings[i]] = obj[temp];
        obj[temp] = index;
        
    }
    return players;
}