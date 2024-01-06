function solution(intStrs, k, s, l) {
    let result = [];
    let arr = intStrs.map((e) => e.split(""));
    for(let i of arr){
        let num = Number(i.slice(s, s+l).join(""));
        if(num > k) result.push(num);
    }
    return result;
}