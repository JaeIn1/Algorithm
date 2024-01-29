function solution(players, callings) {
    const obj = {};
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