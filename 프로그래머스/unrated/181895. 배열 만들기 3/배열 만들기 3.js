function solution(arr, intervals) {
    let result = [];
    for(let [a , b] of intervals){
        result = [...result , ...arr.slice(a , b + 1)]
    }
    return result;
}