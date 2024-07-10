function solution(clothes) {
    let map = new Map();
    let result = 1;
    
    clothes.forEach((e) =>{
        map.set(e[1] , map.has(e[1]) ? map.get(e[1]) + 1  : 1);
    });
    
    for(let [key , value] of map){
        result *= value + 1;
    }
    return result - 1;
}