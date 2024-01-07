function solution(arr, query) {
    for(let i=0;i<query.length;i++){
        i%2 ? arr.splice(0, query[i]) : arr.splice(query[i]+1);
    }
    return arr
}