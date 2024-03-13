function solution(participant, completion) {
    var answer = '';
    let map = new Map();
    participant.forEach((e) =>{
        map.set(e , map.get(e) ? map.get(e) + 1 : 1);
    });
    
    completion.forEach((e) =>{
        map.set(e , map.get(e) - 1)
    });
    
    for(let [key , value] of map){
        if(value !== 0) answer = key;
    }
    return answer;
}