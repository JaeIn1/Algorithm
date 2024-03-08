function solution(s) {
    let result = [];
    let map = new Map();
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++){
        if(map.has(s[i])){
            result.push(i - map.get(s[i]));
            map.set(s[i] , i);
        }
        else{
            map.set(s[i] , i);
            result.push(-1);
        } 
    }
    return result;
}