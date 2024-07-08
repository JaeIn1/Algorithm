function solution(participant, completion) {
    let map= new Map();
    participant.forEach((e) =>{
        map.set(e,  map.has(e) ? map.get(e) + 1 : 1);
    });
    
    completion.forEach((e) =>{
        map.set(e , map.get(e) - 1);
    });
    
    for(let [key , value] of map){
        if(value === 1) return key;
    }
}