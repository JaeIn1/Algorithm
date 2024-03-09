function solution(id_list, report, k) {
    var answer = [];
    let map = new Map();
    let mapCnt = new Map();
    let stopUser = [];

    id_list.forEach((e) =>{
        mapCnt.set(e , 0);
    })
    report.forEach((e) =>{
        let [a , b] = e.split(" ");
        map.set(a , map.get(a) ? [...new Set([...map.get(a) , b])] : [b]);
    })
    
    for(let [key , value] of map){
        for(let i = 0; i < value.length; i++){
            mapCnt.set(value[i] , mapCnt.get(value[i]) + 1);
            if(mapCnt.get(value[i])  >= k ) stopUser.push(value[i]);
        }
    }
    id_list.forEach((e) =>{
        answer.push((map.get(e) || []).filter((e) => stopUser.includes(e)).length)
    })
    
    return answer;
}