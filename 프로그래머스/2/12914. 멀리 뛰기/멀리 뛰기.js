function solution(n) {
    const MOD = 1234567;
    let d = new Array(2000).fill(0);
    d[1] = 1;
    d[2] = 2;
    
    function fibo(x){
        if(d[x] !== 0) return d[x];
        d[x] = (fibo(x - 1) + fibo(x - 2)) % MOD;
        return d[x];
    }
    console.log(d);
    return fibo(n);
}