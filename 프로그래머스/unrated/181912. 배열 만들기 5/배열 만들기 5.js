function solution(intStrs, k, s, l) {
    let result = [];
    for(let i of intStrs){
        let num = Number(i.slice(s, s+l));
        if(num > k) result.push(num);
    }
    return result;
}