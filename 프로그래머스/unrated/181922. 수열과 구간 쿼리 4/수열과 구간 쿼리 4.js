function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        let [a,b,c] = queries[i];
        for(let i = a; i <= b; i++){
            if(i % c === 0) arr[i] += 1;
        }
    }
    return arr;
}