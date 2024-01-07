function solution(arr, queries) {
    for(let [a,b] of queries){
        for(let i = a; i<= b; i++){
            arr[i] += 1;
        }
    }
    return arr;
}