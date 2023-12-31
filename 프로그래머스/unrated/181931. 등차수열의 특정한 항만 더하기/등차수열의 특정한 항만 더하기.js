function solution(a, d, included) {
    let result = 0;
    let plus;
    for(let i = 0; i < included.length; i++){
        if(i === 0){
            plus = a;
            included[0] ? result = a : result=  0;
            continue;
        }
        plus += d;
        if(included[i]){
            result += plus;
        }
    }
    return result;
}