function solution(myString, pat) {
    let result = 0;
    for(let i = 0; i< myString.length; i++){
        if(myString.slice(i , i + pat.length) === pat) result++;
    }
    return result;
}