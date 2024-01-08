function solution(strArr) {
    strArr.map((e,i) => {
        if(i % 2 === 0) strArr[i] = e.toLowerCase();
        else strArr[i] = e.toUpperCase();
    })
    return strArr;
}