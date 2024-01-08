function solution(strArr) {
    let arr = [];
    for(let i = 0; i<strArr.length; i++){
        if(!strArr[i].includes("ad")) arr.push(strArr[i]);
    }
    return arr;
}