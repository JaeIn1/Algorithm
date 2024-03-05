function solution(n) {
    const MOD = 1234567;
    let arr = [0 , 1, 2];
    for(let i = 3; i<=n; i++){
        arr[i] = (arr[i - 1] + arr[i - 2]) % MOD;
    }
        
    return arr[n];
}