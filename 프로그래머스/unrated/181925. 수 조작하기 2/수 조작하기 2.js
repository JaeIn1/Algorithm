function solution(numLog) {
    const obj = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a"
    }
    let result = "";
    for(let i = 0; i<numLog.length-1; i++){
        result += obj[numLog[i+1] - numLog[i]];
    }
    return result;
}