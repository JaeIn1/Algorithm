function solution(arr, queries) {
    for(let [a, b, c] of queries){
        for(let i = a; i <= b; i++){
            if(i % c === 0) arr[i] += 1;
        }
    }
    return arr;
}