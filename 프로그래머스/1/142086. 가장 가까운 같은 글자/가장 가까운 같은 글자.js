function solution(s) {
    let result = [];
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i] , i);
            result.push(-1);
        }
        else{
            result.push(i - map.get(s[i]));
            map.set(s[i] , i);
        }
    }
    return result;
}