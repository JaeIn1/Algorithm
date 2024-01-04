function solution(n, control) {
    const obj = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10
    }
    let result = n;
    for(let i of control){
        result += obj[i];
    }
    return result;
}