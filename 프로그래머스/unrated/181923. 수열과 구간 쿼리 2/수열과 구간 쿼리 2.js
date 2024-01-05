function solution(arr, queries) {
    let result = queries.map(([a,b,c]) => arr.slice(a , b + 1).filter((e) => e > c).sort((a , b) => a - b)[0] ?? -1);
    return result;
}